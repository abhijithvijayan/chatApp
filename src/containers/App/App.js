import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// common styling
import '../../styles/main.scss';
import history from '../../history';

import ChatSection from '../ChatSection';
import NotFoundPage from '../NotFoundPage';

const App = () => {
    return (
        <React.Fragment>
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={ChatSection} />
                    <Route path="" component={NotFoundPage} />
                </Switch>
            </Router>
        </React.Fragment>
    );
};

export default App;
