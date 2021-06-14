import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import List from '../../components/Header/List'

describe(`Header Component`, () => {
    it ('Smoke Test-Render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
        <BrowserRouter>
            <List />
        </BrowserRouter>, div)
        ReactDOM.unmountComponentAtNode(div)
    });
})
