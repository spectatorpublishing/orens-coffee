import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`;

const MainImage = styled.div`
    z-index: 1;
    margin: auto 0rem auto 0rem;
    padding-left: 2rem;
`;

const ColorBox = styled.div`
    background: linear-gradient(180deg, #FBF690 17.71%, #56800B 100%);
    width: 75%;
    height: 80%;
    margin: auto auto auto -16rem;
`;

const Title = styled.div`

`;

const TextBody = styled.div`
    
   
`;

const TextSectionTitle = styled.div`
    
   
`;

const Text = styled.div`
    
   
`;

const TextSection = ({item}) => (
    <div>
        <TextSectionTitle></TextSectionTitle>
        <Text></Text>
    </div>
);


const CoffeeCard = ({image, title, items, alttext}) => (
    <CardContainer>
        <MainImage>
            <img src={image} alt={alttext}/>
        </MainImage>
        <ColorBox>
            <Title>{title}</Title>
            <TextBody>
                {items.map(item => (
                    <TextSection item={item}/>
                ))}
            </TextBody>
        </ColorBox>
    </CardContainer>
);

export default CoffeeCard;