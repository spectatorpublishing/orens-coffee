import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faXmark } from '@fortawesome/free-solid-svg-icons';

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
`;

const MainImage = styled.div`
    z-index: 1;
    margin: auto -18rem auto 0rem;
    img {
        width: 80%;
        height: 80%;
    }
`;

const OrenLogo = styled.div`
    z-index: 1;
    margin: auto 0rem -5rem -14rem;
    img {
        width: 70%;
        height: 70%;
    }
`;

const OrenText = styled.div`
    margin: 0rem 1rem 0rem 1rem;
    font-size: 1 rem;
    font-family: 'Commissioner', serif;
    font-style: normal;
    font-weight: normal;
    line-height: 1 rem;
    color: white;
`;

const ColorBox = styled.div`
    background: ${props => props.color};
    width: 75%;
    height: 100%;
    padding: 2rem 1rem;
    border-radius: 2rem;
`;

const Title = styled.div`
    margin: 0rem 1rem 0rem 1rem;
    color: ${props => props.color};
    font-size: 2.5rem;
    font-family: 'Fraunces', serif;
    font-weight: bold;
    padding-bottom: 0.75rem;
`;

const TextBody = styled.div`
    margin: 0rem 1rem 0rem 13rem;
    font-size: 1 rem;
    font-family: 'Commissioner', serif;
    font-style: normal;
    font-weight: normal;
    line-height: 1 rem;
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
    display: flex;
    flex-direction: row;
    margin: 0rem 0rem 0rem 12rem;
`;

const RowNoIndent = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0rem 0rem 0rem 0rem;
`;

const OrensSection = styled.div`
    margin: 0rem 13rem 0rem 0rem;
`;

const TextSection = ({color, title, text}) => (
    <div>
        <TextSectionTitle color={color}>{title}</TextSectionTitle> <Text>{text}</Text>
    </div>
);

const CoffeeCard = ({data, onClose}) => (
    <CardContainer>
        {(data.title === "Oren's Coffee")? 
        <>
            <ColorBox color={data.backgroundColor}>
                    <RowNoIndent>
                        <Title color={data.textColor}>{data.title}</Title>
                        <Close><FontAwesomeIcon onClick={onClose} icon={faXmark}/></Close>
                    </RowNoIndent>
                    <OrensSection><OrenText>{data.text}</OrenText></OrensSection> 
            </ColorBox>
            <OrenLogo>
                <img src={data.image} alt={data.alttext}/>
            </OrenLogo>
        </> :
        <>
            <MainImage>
                <img src={data.image} alt={data.alttext}/>
            </MainImage>
            <ColorBox color={data.backgroundColor}>
                    <Row>
                        <Title color={data.textColor} >{data.title}</Title>
                        <Close><FontAwesomeIcon onClick={onClose} icon={faXmark}/></Close>
                    </Row>
                    <TextBody>
                        <TextSection color={data.textColor} title="Location:" text={data.location}/>
                        <TextSection color={data.textColor} title="Flavor:" text={data.flavor}/>
                        <TextSection color={data.textColor} title="Best grown In:" text={data.bestGrown}/>
                        <TextSection color={data.textColor} title="Processing: " text={data.processing}/>
                        <TextSection color={data.textColor} title="Roasting:" text={data.roasting}/>
                    </TextBody>
            </ColorBox>
        </>}
    </CardContainer>
);

export default CoffeeCard;