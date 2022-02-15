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
    margin: auto 1rem 0rem 1rem;
    max-width: 15rem;
    height: fit-content;
    img {
        max-width: 15rem;
    }
`;

const OrenText = styled.div`
    margin: 1rem 1rem 0rem 1rem;
    font-size: 1 rem;
    font-family: 'Commissioner', serif;
    font-style: normal;
    font-weight: normal;
    line-height: 1.5rem;
    color: white;
    height: fit-content;
`;

const ColorBox = styled.div`
    background: ${props => props.color};
    width: 75%;
    height: 100%;
    padding: 2rem 1rem;
    border-radius: 2rem;
    margin: 0rem auto 0rem auto;
`;

const Title = styled.div`
    margin: 0rem 1rem 0rem 1rem;
    color: ${props => props.color};
    font-size: 2.5rem;
    font-family: 'Fraunces', serif;
    font-weight: bold;
    padding-bottom: 0.75rem;
    width: fit-content;
`;

const TextBody = styled.div`
    margin: 0rem 1rem 0rem 13rem;
    font-size: 1 rem;
    font-family: 'Commissioner', serif;
    font-style: normal;
    font-weight: normal;
    line-height: 1 rem;
`;

const TextSectionTitle = styled.span`
    font-weight: 700;
    color: ${props => props.color};
    line-height: 1.5rem;
    font-family: 'Fraunces', serif;
`;

const Text = styled.div`
    margin: 0rem 1rem 0.5rem 0rem;
    font-size: 1 rem;
    font-family: 'Commissioner', serif;
    font-style: normal;
    font-weight: normal;
    line-height: 1.5rem;
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

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0rem 0rem 0rem 0rem;
    width: fit-content;
`;

const OrensSection = styled.div`
    margin: 0rem 1rem 0rem 0rem;
    height: fit-content;
`;

const TextSection = ({color, title, text}) => (
    <div>
        <Text><TextSectionTitle color={color}>{title}</TextSectionTitle>{text}</Text>
    </div>
);

const CoffeeCard = ({data, onClose}) => (
    <CardContainer>
        {(data.title === "Oren's Coffee")? 
        <>
            <ColorBox color={data.backgroundColor}>
                        <Column>
                        <RowNoIndent>
                            <Title color={data.textColor}>{data.title}</Title>
                            <Close><FontAwesomeIcon onClick={onClose} icon={faXmark}/></Close>
                        </RowNoIndent>
                        <RowNoIndent>   
                            <OrensSection>
                                <OrenText>{data.text[0]}</OrenText>
                                <OrenText>{data.text[1]}</OrenText>
                            </OrensSection>
                        <OrenLogo>
                            <img src={data.image} alt={data.alttext}/>
                        </OrenLogo>
                    </RowNoIndent>
                    </Column>
            </ColorBox>
            
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
                        <TextSection color={data.textColor} title="Location: " text={data.location}/>
                        <TextSection color={data.textColor} title="Flavor: " text={data.flavor}/>
                        <TextSection color={data.textColor} title="Best grown In: " text={data.bestGrown}/>
                        <TextSection color={data.textColor} title="Processing: " text={data.processing}/>
                        <TextSection color={data.textColor} title="Roasting: " text={data.roasting}/>
                    </TextBody>
            </ColorBox>
        </>}
    </CardContainer>
);

export default CoffeeCard;