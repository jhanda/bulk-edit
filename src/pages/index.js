import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router'

import Search from './search'
import SelectOperation from './select-operation'
import OperationDetails from './operation-details'
import Confirmation from './confirmation'

const Pages = () => {
    return (
        <Router>
            <Route exact path="/" element={Search} />
            <Route  path="/select-operation" element={SelectOperation} />
            <Route  path="/operation-details" element={OperationDetails} />
            <Route  path="/confirmation" element={Confirmation} />
        </Router>
    );
};

export default Pages;