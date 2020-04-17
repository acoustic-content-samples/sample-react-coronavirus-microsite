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
import { useSearch } from 'utils/hooks';
import './styles.scss';
import { searchKeys, types } from 'api/content';
import { sortMapper, documentsSelector } from 'utils/helpers';
import { DOMAIN_NAME } from 'api/endpoints';


const Resources = ({styleGuide}) => {

    const documents = useSearch(
        {
          sort: sortMapper(searchKeys.displayOrder),
          fq: `type:(${types.resource})`,
          fl: 'document:[json]',
        },
        documentsSelector
      );

    if(!documents?.length){
        return null;
    }
    return(
        <div className="sidebarSection">
            <div className="sidebarTitle" style={{color:styleGuide.titleText, fontFamily:styleGuide.fontFamily}}>Resources</div>
                <ul>
                    {documents?.map((document)=>
                        <li key={document.id}>
                            {document.elements.linkToFile.url && 
                                <a href={DOMAIN_NAME + document.elements.linkToFile.url} target="_blank" style={{color:styleGuide.bodyText, fontFamily:styleGuide.fontFamily}}>{document.elements.title.value}</a>}
                            
                            {document.elements.linkToWebpage.linkURL && 
                                <a href={document.elements.linkToWebpage.linkURL.indexOf("http")>-1 ? document.elements.linkToWebpage.linkURL : "https://" + document.elements.linkToWebpage.linkURL} target="_blank" style={{color:styleGuide.bodyText, fontFamily:styleGuide.fontFamily}}>{document.elements.title.value}</a>}
                            
                        </li>
                    )}
                </ul>
        </div>
    )
}
export default Resources;