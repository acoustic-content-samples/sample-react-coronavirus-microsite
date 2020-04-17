/*
 * Copyright 2020 Acoustic, L.P.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import React from 'react';
import { useFetchElements, createPageView } from 'utils/hooks';
import { renderImageRendition } from 'utils/helpers'
import Banner from './Banner/Banner';
import CompanyStatement from './CompanyStatement/CompanyStatement';
import ArticlePreview from './ArticlePreview/ArticlePreview';
import FAQPreview from './FAQPreview/FAQPreview';
import RecentUpdates from '../../components/Sidebar/RecentUpdates';
import Resources from '../../components/Sidebar/Resources';
import Social from '../../components/Sidebar/Social';
import Contact from '../../components/Sidebar/Contact';
import RecentFAQs from '../../components/Sidebar/RecentFAQs';
import styles from './styles.module.scss';
import { contentIds } from 'api/content';


const Home = () => {

  const styleGuide = useFetchElements(contentIds.styleGuide);  //Style Guide

  const styleGuideValues = {
    fontFamily: styleGuide?.fontFamily?.categories[0].toString().split('/')[2],
    titleText: styleGuide?.titleText.value,
    bodyText: styleGuide?.bodyText.value,
    textOnImage: styleGuide?.textOnImage.value,
    link: styleGuide?.link.value,
    background: styleGuide?.background.value,
    backgroundBottom: styleGuide?.backgroundBottom.value
  }

  //createPageView("Home Page", null);

  return (
    <>
      {(
        <Banner
          styleGuide={styleGuideValues}
        />
      )}
      {(
        <CompanyStatement
          styleGuide={styleGuideValues}
        />
      )}
      <div className="container-fluid" style={{ backgroundColor: styleGuideValues.backgroundBottom }}>
        <div className="row">
          <div className={"col-1 d-none d-md-block"}></div>
          <div className="col">
            {(
              <div className={styles.articlePreview} style={{ color: styleGuideValues.titleText, fontFamily: styleGuideValues.fontFamily }}>
                <div className={styles.updateTitle} style={{ color: styleGuideValues.titleText }}>
                  Top updates
                        <a href="#/updates" className={styles.allLink} style={{ color: styleGuideValues.link, fontFamily: styleGuideValues }}>view all updates</a>
                </div>
                <ArticlePreview
                  styleGuide={styleGuideValues}
                />
              </div>

            )}
            {(
              <div className={styles.faqPreview} style={{ color: styleGuideValues.titleText, fontFamily: styleGuideValues.fontFamily, backgroundColor: styleGuideValues.backgroundBottom }}>
                <div className={styles.faqTitle}>
                  Top FAQs
                    <a href="#/faq" className={styles.allLink} style={{ color: styleGuideValues.link, fontFamily: styleGuideValues }}>view all FAQs</a>
                </div>
                <div className={styles.faqItems}>
                  <FAQPreview
                    styleGuide={styleGuideValues}
                  />
                </div>
              </div>
            )}
          </div>
          <div className={"col-md-3"}>
            <div className={styles.sidebar}>
              {(
                <Resources styleGuide={styleGuideValues} />
              )}
              {(
                <RecentUpdates
                  styleGuide={styleGuideValues}
                />
              )}
              {(
                <RecentFAQs
                  styleGuide={styleGuideValues}
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
    </>
  )
};
export default Home;

