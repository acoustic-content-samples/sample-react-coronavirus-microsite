/*
 * Copyright 2020 Acoustic, L.P.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Gallery from 'pages/Gallery/Gallery';
import Contact from 'pages/Contact/Contact';
import Search from 'pages/Search/Search';
import FAQs from 'pages/Faq/Faq';


export const home = {
  path: '/',
  component: Home,
  name: 'Response',
  exact: true,
};

const about = {
  path: '/about',
  component: About,
  name: 'About',
};

export const gallery = {
  path: '/updates',
  component: Gallery,
  name: 'Updates',
};


export const destination = {
  path: '/destination',
  component: Gallery,
  name: 'Destination',
};


const contact = {
  path: '/contact',
  component: Contact,
  name: 'Contact',
};

export const search = {
  path: '/search',
  component: Search,
};

export const faq = {
  path: '/faq',
  component: FAQs,
  name: 'FAQs'
};

export const navRoutes = [home, gallery, faq];
export const routes = [...navRoutes, search];
