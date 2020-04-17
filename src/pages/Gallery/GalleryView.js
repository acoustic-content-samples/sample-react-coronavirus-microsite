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
import { useRouteMatch } from 'react-router-dom';

import {
  sortMapper,
  documentsSelector,
  removeDuplicates,
  getLastItemInPath,
} from 'utils/helpers';

import { contentIds } from 'api/content';

import { useSearch, useFetchElements } from 'utils/hooks';
import FilterMenu from './FilterMenu/FilterMenu';
import FilterResults from './FilterResults/FilterResults';
import { types, searchKeys } from 'api/content';
import ArticlesPreviewCard from 'components/ArticlesPreviewCard/ArticlesPreviewCard';
import Resources from '../../components/Sidebar/Resources';
import Social from '../../components/Sidebar/Social';
import Contact from '../../components/Sidebar/Contact';

import styles from './styles.module.scss';

const EXCLUDED_TAG = 'travel site sample';



const GalleryView = () => {

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


  const documents = useSearch(
    {
      rows: 1000,
      fq: `type:(${types.article})`,
      fl: 'document:[json]',
      sort: sortMapper(searchKeys.displayOrder),
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
    const categories = elements?.articleCategories?.categories;
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

  const { url } = useRouteMatch();

  if (!documents?.length) {
    return null;
  }

  return (
    <>
      <div className={styles.gallery} style={{ backgroundColor: styleGuideValues.background, fontFamily: styleGuideValues.fontFamily }}>
        <h1>Latest Coronavirus Updates</h1>
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
        <div className={styles.articlePreview} style={{ color: styleGuideValues.titleText, fontFamily: styleGuideValues.fontFamily, backgroundColor: styleGuideValues.background }}>
          <ArticlesPreviewCard articles={documents.filter(filterOut)} redirectFrom={url} styleGuide={styleGuideValues} />
        </div>
      </div>
    </>
  );
};

export default GalleryView;
