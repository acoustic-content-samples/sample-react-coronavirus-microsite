/*
 * Copyright 2020 Acoustic, L.P.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  renderImageRendition,
  renderFormattedText,
  renderVideo,
  formatDate,
} from 'utils/helpers';
import GoBack from 'components/GoBack/GoBack';
import { useFetchContent } from 'utils/hooks';
import styles from './styles.module.scss';
import { useFetchElements } from 'utils/hooks';
import { contentIds } from 'api/content';
import RelatedUpdates from '../../../components/Sidebar/RelatedUpdates';
import Resources from '../../../components/Sidebar/Resources';
import Social from '../../../components/Sidebar/Social';
import Contact from '../../../components/Sidebar/Contact';
import RelatedFAQs from '../../../components/Sidebar/RelatedFAQs';


const Article = () => {
  const { articleId } = useParams();
  const content = useFetchContent(articleId);

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

  if (!content) {

    return null;
  }

  const { elements, lastModified } = content;



  return (
    elements && (
      <div>
        <div className="container-fluid" style={{ backgroundColor: styleGuideValues.backgroundBottom }}>
          <div className="row">

            <div className="col-xs col-lg-9" style={{ fontFamily: styleGuideValues.fontFamily, backgroundColor: styleGuideValues.backgroundBottom }}>

              <div className={styles.article}>
                <GoBack className={styles.goBack} styleGuide={styleGuideValues} />




                <div className={styles.header} style={{ color: styleGuideValues.titleText }}>
                  {elements.articleTitle?.value}
                  <div className={styles.details} style={{ color: styleGuideValues.bodyText }}>
                    <span>{elements.articleAuthor?.value}</span>
                    <span>{formatDate(elements.articleDate.value)}</span>
                  </div>
                  {elements.articleImage && renderImageRendition(
                    elements.articleImage?.renditions?.article
                  )}
                  {elements.articleVideo &&
                    renderVideo(elements.articleVideo.url, 'video')

                  }
                </div>
                <section>
                  {elements.articleText &&
                    elements.articleText.values.map((value, index) => (
                      <div key={index}>
                        {renderFormattedText(
                          value,
                          styles.articleContent
                        )}
                      </div>

                    ))
                  }
                </section>
              </div >
            </div>

            <div className={" col-lg-3"}>
              <div className={styles.sidebar}>
                {(
                  <Resources styleGuide={styleGuideValues} />
                )}
                {(
                  <RelatedUpdates
                    articleId={articleId} categories={elements.articleCategories?.categories} styleGuide={styleGuideValues}
                  />
                )}
                {(
                  <RelatedFAQs
                    categories={elements.articleCategories?.categories} styleGuide={styleGuideValues}
                  />
                )}
                {(
                  <Social
                    styleGuide={styleGuideValues}
                  />
                )}
                {(
                  <Contact
                    styleGuide={styleGuideValues}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  );
};

export default Article;
