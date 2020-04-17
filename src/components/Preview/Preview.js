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

import { renderImageRendition, renderFormattedText, formatDate } from 'utils/helpers';
import styles from './styles.module.scss';

const Preview = ({
  handleItemClick = () => { },
  image,
  title,
  info,
  handleInfoCLick = () => { },
  author,
  date,
  articleSummary,
  styleGuide
}) => {

  return (
    <div className={styles.preview} style={{ backgroundColor: styleGuide.background }} onClick={handleItemClick}>
      <div>
        {image && renderImageRendition(image)}

        <div className={styles.textFields}>
          {(author || date) && (
            <div className={styles.details} style={{ color: styleGuide.bodyText, fontFamily: styleGuide.fontFamily }}>
              {author} {formatDate(date)}
            </div>
          )}

          <div className={styles.title}
            style={{ color: styleGuide.titleText, fontFamily: styleGuide.fontFamily }}
          >
            {title}

            {info && (
              <span
                className={styles.info}
              >
                {info}
              </span>
            )}

          </div>
          <div className={styles.body}
            style={{ color: styleGuide.bodyText, fontFamily: styleGuide.fontFamily }}
          >
            {articleSummary && renderFormattedText(articleSummary)}

          </div>
        </div>
        <div className={styles.readMore}

            onClick={handleItemClick}
            tabIndex="0"
            style={{ color: styleGuide.link, fontFamily: styleGuide.fontFamily }}
          >
            read more

          </div>
      </div>
    </div>
  );
};

export default Preview;
