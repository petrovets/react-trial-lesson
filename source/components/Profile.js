//Core
import React from 'react';
import avatar from '../theme/assets/images/nasa';

export default class Profile extends React.Component {

    render () {
        return (
            <div className = 'profile'>
                <img scr = { avatar } />
            </div>

        );

    }
}
