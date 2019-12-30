import React from 'react';

import { HomePageContainer } from './homepage.styles';

import Directory from '../../components/directory/directory.component';

const HomePage = (props) => {
    console.log(props)
    return (
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
    )
}

export default HomePage;