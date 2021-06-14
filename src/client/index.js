import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App'
import {BrowserRouter} from 'react-router-dom'
import {library} from '@fortawesome/fontawesome-svg-core'
import './index.css';

import {
  faCopyright,
  faEdit,
  faTrash,
  faHamburger,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faCopyright,
  faEdit,
  faTrash,
  faHamburger,
  faEnvelope,
)


ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,document.getElementById('root'));