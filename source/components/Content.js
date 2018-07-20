//Core
import React from 'react';
import Profile from './Profile';

export default class Content extends React.Component {

    render () {
        return (
            <div className = 'content'>
                <Profile />
                <p>Photos</p>
            </div>

        );

    }
}
