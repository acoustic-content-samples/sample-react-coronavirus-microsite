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

import SearchBar from './SearchBar';
import NavBar from './NavBar';
import styles from './styles.module.scss';
import { useFetchElements } from 'utils/hooks';
import { contentIds } from 'api/content';

const Header = () => {
  const [isSearchOpened, setIsSearchOpened] = useState(false);

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

  return (
    <header className={styles.header} style={{ fontFamily: styleGuideValues.fontFamily }} >
      {isSearchOpened ? (
        <SearchBar handleSearchClose={() => setIsSearchOpened(false)} />
      ) : (
          <NavBar handleSearchOpen={() => setIsSearchOpened(true)} />
        )}
    </header>
  );
};

export default Header;
