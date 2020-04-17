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
import { contentIds } from 'api/content';
import './styles.scss';

const CompanyStatement = ({ styleGuide }) => {

  const statementElements = useFetchElements(contentIds.companyStatement);  //Statement content item

  return (
    <div className="container-fluid" style={{ background: styleGuide?.background }}>
      <div className="row">
        <div className="col-1 d-none d-md-block"></div>
        <div className="col" style={{paddingTop:"44px"}}>
          <div className="companyStatement">
            <div className="statementTitle" style={{ color: styleGuide.titleText, fontFamily: styleGuide.fontFamily }}>
              {statementElements?.statementTitle.value}
            </div>
            <div className="statementBody" style={{ color: styleGuide.bodyText, fontFamily: styleGuide.fontFamily }}>
              {statementElements?.statementBody.value}
            </div>
          </div>
        </div>
        <div className="d-none d-md-block col-3"></div>
      </div>
    </div>
            
  )
};

export default CompanyStatement;
