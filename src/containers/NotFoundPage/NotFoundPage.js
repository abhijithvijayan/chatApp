import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const NotFoundPage = () => {
    return (
        <section id="notFound">
            <div>
                <p>You seem lost</p>
                <Link to="/">Get Me Home</Link>
            </div>
        </section>
    );
};

export default NotFoundPage;
