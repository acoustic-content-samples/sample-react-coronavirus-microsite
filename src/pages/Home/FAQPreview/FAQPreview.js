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
import { useRouteMatch } from 'react-router-dom';

import ArticlesPreviewCard from 'components/ArticlesPreviewCard/ArticlesPreviewCard';
import FAQItem from 'components/FAQItem/FAQItem'
import { sortMapper, documentsSelector } from 'utils/helpers';
import { useSearch } from 'utils/hooks';
import { types, searchKeys } from 'api/content';

const FAQPreview = ({ styleGuide }) => {
  const documents = useSearch(
    {
      sort: sortMapper(searchKeys.displayOrder),
      fq: `type:(${types.faqItem}) AND ${searchKeys.topUpdate}:true`,
      fl: 'document:[json]',
    },
    documentsSelector
  );

  const { url } = useRouteMatch();

  return documents && (
    documents.map(document => (
      <FAQItem
        key={document?.id}
        question={document?.elements?.question?.value}
        urls={document?.elements?.referenceLinkUrls}
        response={{
          value: document?.elements?.response?.value
        }}
        styleGuide={styleGuide} />)))

};

export default FAQPreview;
