/*
 * Copyright 2020 Acoustic, L.P.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import React, { useState } from 'react';

import { renderFormattedText } from 'utils/helpers';
import styles from './styles.module.scss';

const FAQItem = data => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setError] = useState(false);

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  const urlItems = data?.urls?.values?.map((url, index) =>
    <li key={index}><a style={{ color: data.styleGuide.link }} href={url.linkURL}>{url.linkText}</a></li>
  );

  const styleGuide = data.styleGuide;

  return (
    <>
      <div>
        <div id={data?.id} className={styles.question} style={{ color: styleGuide.titleText }}>{data?.question}</div>
        <div className={styles.response} style={{ color: styleGuide.bodyText }}>
          {data?.response?.value && renderFormattedText(data?.response?.value)}
        </div>
        <ul className={styles.urlItems} style={{ color: styleGuide.link }}>
          {urlItems}
        </ul>
      </div>
    </>
  );
};

export default FAQItem;