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
import { useFetchElements } from 'utils/hooks';
import { DOMAIN_NAME } from 'api/endpoints';
import './styles.scss';
import { useSearch } from 'utils/hooks';
import { types, searchKeys } from 'api/content';
import { faqSortMapper, documentsSelector } from 'utils/helpers';
import { HashLink as Link } from 'react-router-hash-link';

const RelatedFAQs = ({ categories, styleGuide }) => {

    let query = "";
    for (let i = 0; i < categories?.length; i++) {

        query += searchKeys.categories + ':(' + categories[i] + ')';
        if (i < categories.length - 1) {
            query += ' OR ';
        }
    }

    if (!query) {
        query = searchKeys.categories + ':none';
    }

    const documents = useSearch(
        {
            sort: faqSortMapper(searchKeys.displayOrder),
            fq: `type:(${types.faqItem}) AND ( ${query} )`,
            fl: 'document:[json]&rows=5',
        },
        documentsSelector
    );

    if (!documents?.length) {
        return null;
    }
    return (
        <div className="sidebarSection">
            <div className="sidebarTitle" style={{ color: styleGuide.titleText, fontFamily: styleGuide.fontFamily }}>Related FAQs</div>
            <ul style={{ color: styleGuide.bodyText, fontFamily: styleGuide.fontFamily }}>
                {documents?.map((document, index) =>
                    <li key={index}><Link style={{ color: styleGuide.bodyText }} to={"/faq/faq#" + document?.id}>{document?.elements.question.value}</Link></li>

                )}
                <li><a href="#/faq" style={{ color: styleGuide.link, fontFamily: styleGuide.fontFamily }}>view all FAQs </a></li>
            </ul>
        </div>
    )
}
export default RelatedFAQs;