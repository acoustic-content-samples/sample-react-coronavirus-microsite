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
import { HashLink as Link } from 'react-router-hash-link';
import styles from './styles.module.scss';

const FAQQuestion = data => {
  const [loaded, setLoaded] = useState(false);
  const [hasError, setError] = useState(false);

  const handleError = () => {
    setError(true);
    setLoaded(true);
  };

  const styleGuide = data.styleGuide;

  return (
    <>
      <div>
        <div id={data.id} className={styles.anchor} style={{ color: styleGuide.link }} onClick={data.onclick}>
          <Link style={{ color: styleGuide.link }} to={"faq#" + data?.linkTo}>{data?.question}</Link>
        </div>
      </div>
    </>
  );
};

export default FAQQuestion;