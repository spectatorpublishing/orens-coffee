import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faXmark } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    @media (min-width: ${theme.sizes.mobile}) {
        display: none;
    }
`;

const MainImage = styled.div`
    display: block;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    img {
        width: 85%;
        height: 85%;
    }
`;


const ColorBox = styled.div`
    background: ${props => props.color};
    width: 100%;
    height: 100%;
`;

const SectionColorTransition1 = styled.div`
    background:  linear-gradient(#E3D8BA, ${props => props.color}); 
    width: 100%;
    height: 10rem;
`;

const SectionColorTransition2 = styled.div`
    background:  linear-gradient(${props => props.color}, #E3D8BA); 
    width: 100%;
    height: 10rem;
`;


const Title = styled.div`
    text-align: center;
    color: ${props => props.color};
    font-size: 2.5rem;
    font-family: 'Fraunces', serif;
    font-weight: bold;
    padding-bottom: 0.75rem;
    
`;

const TextBody = styled.div`
    font-family: 'Commissioner', serif;
    font-style: normal;
    font-weight: normal;
    font-size: 1rem;
    line-height: 2rem;
    margin: 2rem 2rem 0rem 2rem;
`;

const TextSectionTitle = styled.div`
    font-weight: 700;
    color: ${props => props.color};
   
`;

const Text = styled.div`
    margin: 0rem 1rem 0rem 1rem;
    font-size: 1 rem;
    font-family: 'Commissioner', serif;
    font-style: normal;
    font-weight: normal;
    line-height: 1 rem;
    color: black;
`;

const Close = styled.div`
    color: black;
    font-size: 1.5rem;
    margin: 0rem 1.5rem auto auto;
    width: fit-content;
    : hover {
        color: #ba0100;
    }
`;

const Row = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;`;

const RowNoIndent = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0rem 0rem 0rem 0rem;
`;

const TextSection = ({color, title, text}) => (
    <div>
        <TextSectionTitle color={color}>{title}</TextSectionTitle> <Text>{text}</Text>
    </div>
);

const MobileCoffeeCard = ({data}) => (
    <CardContainer>
        <SectionColorTransition1 color={data.color1}></SectionColorTransition1>
        <ColorBox color={data.backgroundColor}>
            <Row>
                <Title color={data.textColor} >{data.title}</Title>
            </Row>
            <MainImage>
                <img src={data.image} alt={data.alttext}/>
            </MainImage>
            <TextBody>
                <TextSection color={data.textColor} title="Location:" text={data.location}/>
                <TextSection color={data.textColor} title="Flavor:" text={data.flavor}/>
                <TextSection color={data.textColor} title="Best grown In:" text={data.bestGrown}/>
                <TextSection color={data.textColor} title="Processing: " text={data.processing}/>
                <TextSection color={data.textColor} title="Roasting:" text={data.roasting}/>
            </TextBody>
        </ColorBox>
        <SectionColorTransition2 color={data.color2}></SectionColorTransition2>
    </CardContainer>
);

export default MobileCoffeeCard;