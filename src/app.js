// Importaciomes de assets que luego apareceran en bundle.js
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import toastr from 'toastr';
import 'bootstrap/dist/css/bootstrap.css';
import 'toastr/build/toastr.css';
import './main/resources/css/nav-bar.css';
import './main/resources/css/jumbo.css';
import './main/resources/css/locator.css';
import MainNavBar from './react_components/mainnavbar';
import Jumbo from './react_components/jumbo';
import Locator from './react_components/locator';
import Modalmap from './react_components/modal-map'

import TableStriped from './react_components/table';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
                <div>
                    <MainNavBar/>
                    <Jumbo/>
                    <Locator/>
                </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));