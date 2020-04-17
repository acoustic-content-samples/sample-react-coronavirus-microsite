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
import { useHistory } from 'react-router-dom';

import { useFetchContextElements } from 'utils/hooks';
import { DOMAIN_NAME } from 'api/endpoints';
import './styles.scss';
import { documentsSelector, formatMonthDay } from 'utils/helpers';
import { useSearch } from 'utils/hooks';
import { types, searchKeys } from 'api/content';
import { home, gallery } from 'router/routes';
import RecentUpdatesList from 'components/Sidebar/RecentUpdatesList';

const RecentUpdates = ({styleGuide}) => {
    const updates = [];
    const history = useHistory();
    const documents = useSearch(
        {
          sort: searchKeys.articleDate + " desc",
          fq: `type:(${types.article}) AND ${searchKeys.topUpdate}:false`,
          fl: 'document:[json]&rows=5',
        },
        documentsSelector
      );

      const { url } = useRouteMatch();

      const getPathByRedirectUrl = {
        [home.path]: category => `${gallery.path}`,
        [gallery.path]: category => `${gallery.path}`
      };

      const handleArticleClick = (category, id) => {
        if (category && id) {
          const path = url
            ? getPathByRedirectUrl[url](category)
            : history.location.pathname;
          history.push(`${path}/${id}`);
        }
      };

    if (!documents?.length) {
        return null;
    }
      const items = documents?.map((document) => {
        updates.push({
            id:document.id,
            date:formatMonthDay(document.elements.articleDate.value),
            title:document.elements.articleTitle.value,
        });
      });
    return (
        <div className="sidebarSection">
            <div className="sidebarTitle" style={{color:styleGuide.titleText, fontFamily:styleGuide.fontFamily}}>Other recent updates</div>
            <div className="container">
                <div className="row">
                    <div className="update">
                        {updates.map((update, index) =>
                            <div>
                                <RecentUpdatesList
                                    key={index}
                                    index={index}
                                    date={update?.date}
                                    title={update?.title}
                                    bold={true}
                                    articleClick={() =>
                                    handleArticleClick(gallery.path, update?.id)
                                    }
                                    styleGuide={styleGuide}
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="row">
                    <a href="#/updates" className="viewUpdates" style={{color:styleGuide.link, fontFamily:styleGuide.fontFamily}}>view all updates</a>
                </div>    
            </div>
        </div>
    )
}

export default RecentUpdates;