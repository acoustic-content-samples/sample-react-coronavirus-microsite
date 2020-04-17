/*
 * Copyright 2020 Acoustic, L.P.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

import {
  documentsSelector,
  removeDuplicates,
  getLastItemInPath,
} from 'utils/helpers';

import { useSearch } from 'utils/hooks';
import FilterMenu from './FilterMenu/FilterMenu';
import FilterResults from './FilterResults/FilterResults';
import { types } from 'api/content';
import FAQItem from 'components/FAQItem/FAQItem';
import { faq as faqRoute } from 'router/routes';
import styles from './styles.module.scss';
import { useFetchElements } from 'utils/hooks';
import { contentIds } from 'api/content';
import FAQQuestion from 'components/FAQItem/FAQQuestion';

const EXCLUDED_TAG = 'travel site sample';



const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  paper: {
    backgroundColor: 'white',
    borderRadius: '5px',
    boxShadow: '1px 1px 5px',
    padding: '1rem',
    overflow: 'auto',
    position: 'relative',
    [theme.breakpoints.between('xs', 'md')]: {
      width: '100vw',
      height: '100vh',
    },
    [theme.breakpoints.between('md', 'lg')]: {
      maxHeight: '90%',
      height: 'auto',
      width: '85%'
    },
    [theme.breakpoints.up('lg')]: {
      maxHeight: '85%',
      height: 'auto',
      width: '75%'
    },
  },
  image: {
    maxWidth: '100%',
  },
  modalHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  },
}));

const ImageModalId = 'image-preview-modal';

const FAQs = () => {

  const styleGuide = useFetchElements(contentIds.styleGuide);  //Style Guide 

  const styleGuideValues = {
    fontFamily: styleGuide?.fontFamily?.categories[0].toString().split('/')[2],
    titleText: styleGuide?.titleText?.value,
    bodyText: styleGuide?.bodyText?.value,
    textOnImage: styleGuide?.textOnImage?.value,
    link: styleGuide?.link?.value,
    background: styleGuide?.background?.value,
    backgroundBottom: styleGuide?.backgroundBottom?.value
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [previewImage, setPreviewImage] = React.useState(null);

  const documents = useSearch(
    {
      rows: 1000,
      fq: `type:(${types.faqItem})`,
      fl: 'document:[json]',
    },
    documentsSelector

  );

  const [locationFilter, setLocationFilter] = useState({
    available: [],
    selected: [],
  });

  const [interestsFilter, setInterestsFilter] = useState({
    available: [],
    selected: [],
  });

  useEffect(() => {
    if (documents) {
      const filters = documents.reduce(
        (acc, doc) => {
          if (doc?.elements) {
            acc.location.push(...getCategoryValues(doc.elements));
          }
          if (doc?.tags)
            acc.interests.push(
              ...doc.tags.filter(tag => tag.toLowerCase() !== EXCLUDED_TAG)
            );
          return acc;
        },
        {
          location: [],
          interests: [],
        }
      );

      setLocationFilter({
        available: removeDuplicates(filters.location),
        selected: [],
      });
      setInterestsFilter({
        available: removeDuplicates(filters.interests),
        selected: [],
      });
    }
  }, [documents]);

  const onFilterDelete = item => {
    if (locationFilter.selected.includes(item)) {
      setLocationFilter({
        available: [...locationFilter.available, item],
        selected: locationFilter.selected.filter(x => x !== item),
      });
      return;
    }
    setInterestsFilter({
      available: [...interestsFilter.available, item],
      selected: interestsFilter.selected.filter(x => x !== item),
    });
  };

  const getCategoryValues = elements => {
    const categories = elements?.faqCategories?.categories;
    if (!categories) return [];
    return categories.length ? categories.map(getLastItemInPath) : [];
  };

  const isFilterEmpty =
    !interestsFilter.selected.length && !locationFilter.selected.length;

  const includes = (searchIn = [], includesFrom = []) =>
    searchIn.some(i => includesFrom.includes(i));

  const filterOut = d =>
    isFilterEmpty ||
    includes(d.tags, interestsFilter.selected) ||
    includes(getCategoryValues(d.elements), locationFilter.selected);

  const onClosePreview = () => {
    setPreviewImage(null);
    history.push({
      pathname: faqRoute.path,
    });
  };

  const history = useHistory();
  const searchParams = new URLSearchParams(history.location.search);

  const handleEnterKeyDown = method => event => {
    if (event.key === 'Enter') {
      method();
    }
  };

  const handleImageEscapeKeydown = event => {
    const isActive = document.getElementById(ImageModalId);
    if (isActive && event.key === 'Escape') {
      onClosePreview();
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleImageEscapeKeydown);

    return () =>
      document.body.removeEventListener('keydown', handleImageEscapeKeydown);
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  const openImage = d => {
    setPreviewImage(d?.elements);
    history.push({
      pathname: faqRoute.path,
      search: new URLSearchParams({
        galleryImageId: d?.id,
      }).toString(),
    });
  };

  if (!documents?.length) {
    return null;
  }
  return (
    <div className={styles.gallery} style={{ backgroundColor: styleGuideValues.background, fontFamily: styleGuideValues.fontFamily }}>
      <h1>Frequently Asked Questions</h1>
      <div className={styles.filter}>
        <div className={styles.actions}>
          <FilterMenu
            label="Categories"
            options={locationFilter}
            setter={setLocationFilter}
            styleGuide={styleGuideValues}
          />
          <FilterMenu
            label="Tags"
            options={interestsFilter}
            setter={setInterestsFilter}
            styleGuide={styleGuideValues}
          />
        </div>
        <div className={styles.chips}>
          <FilterResults
            results={[...locationFilter.selected, ...interestsFilter.selected]}
            onDelete={onFilterDelete}
          />
        </div>
      </div>
      <div className={styles.questions}>
        {documents.filter(filterOut).map(d => (

          <FAQQuestion
            linkTo={d?.id}
            question={d?.elements?.question?.value}
            styleGuide={styleGuideValues}
          />
        ))}
      </div>

      <div className={styles.event}>
        <div className={styles.event}>
          {documents.filter(filterOut).map(d => (
            <div
              key={d?.id}
              className={styles.card}
              tabIndex="0"
            >
              <FAQItem
                id={d?.id}
                question={d?.elements?.question?.value}
                urls={d?.elements?.referenceLinkUrls}
                response={{
                  value: d?.elements?.response?.value,
                }}
                styleGuide={styleGuideValues}
              />
              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;

