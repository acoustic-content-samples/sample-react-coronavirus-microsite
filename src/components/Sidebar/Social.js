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
import { useFetchContextElements } from 'utils/hooks';
import { DOMAIN_NAME } from 'api/endpoints';
import './styles.scss';
import { contentIds } from 'api/content';
import {CompanyInfo} from 'components/CompanyInformation/CompanyInformation'

const Social = ({styleGuide}) => {

    const data = CompanyInfo();
    
    if (!data?.socialMediaNetworks) {
        return null;
    }
    return(
    
        <div className="sidebarSection">
            <div className="sidebarTitle" style={{color:styleGuide.titleText, fontFamily:styleGuide.fontFamily}}>Follow Us</div>
                <ul>
                    {data?.socialMediaNetworks.values.map((items, index) => 
                        <li key={index}>
                            <img src={DOMAIN_NAME + items.elements.socialIcon.url}/>
                            <a href={items.elements.socialLink.linkURL.indexOf("http") > -1 ? items.elements.socialLink.linkURL: "https://"+items.elements.socialLink.linkURL} style={{color:styleGuide.bodyText, fontFamily:styleGuide.fontFamily}}>{items.elements.socialLink.linkText}</a>
                        </li>
                    )}
                </ul>
        </div>
    )
    
}
export default Social;