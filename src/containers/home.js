import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const HomeContainer = styled.div`

`;

const MainImage = styled.div`
    display: flex;
    img {
        width: 100vw;
        height: auto;
        object-fit: cover;
    }
`;

const Title = styled.div`
    position: absolute;
   text-align: center;
   top: 30vh;
   color: ${theme.colors.cream};
   font-size: 6rem;
   font-family: 'Fraunces', serif;
   font-weight: 400;
`;

const TopText = styled.div`
    
   
`;

const BottomText = styled.div`
   
`;

const HomeContent = styled.div`
    background-color: ${theme.colors.cream};
`;

const Home = () => (
    <HomeContainer>
        <MainImage>
            <img src="https://sbs-assets.s3.amazonaws.com/orens-coffee/24298B46-EA61-4280-9591-0FA6FE035C07.gif" alt="World map with highlighted coffee regions"/>
            <Title>
                <TopText><b>Bean to Beverage</b></TopText>
                <BottomText>Your Coffee’s World-Class Journey</BottomText>
            </Title>
        </MainImage>
        <HomeContent>


        </HomeContent>
    </HomeContainer>
);

export default Home;