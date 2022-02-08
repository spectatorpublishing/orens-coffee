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
    margin: auto 0rem -9rem -9rem;
    img {
        width: 80%;
        height: 80%;
    }
`;

const ColorBox = styled.div`
    background: ${props => props.color};
    width: 80%;
    height: 100%;
    padding: 2rem 1rem;
`;

const Title = styled.div`
    margin: 0rem 1rem 0rem 1rem;
`;

const TextBody = styled.div`
    margin: 0rem 1rem 0rem 13rem;
   
`;

const TextSectionTitle = styled.div`
    
   
`;

const Text = styled.div`
    margin: 0rem 1rem 0rem 1rem;
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
    margin: 0rem 1rem 0rem 0rem;
`;

const TextSection = ({title, text}) => (
    <div>
        <TextSectionTitle>{title}</TextSectionTitle>
        <Text>{text}</Text>
    </div>
);

const CoffeeCard = ({data, onClose}) => (
    <CardContainer>
        {(data.title === "Oren's Coffee")? 
        <>
            <ColorBox color={data.backgroundColor}>
                    <RowNoIndent>
                        <Title>{data.title}</Title>
                        <Close><FontAwesomeIcon onClick={onClose} icon={faXmark}/></Close>
                    </RowNoIndent>
                    <OrensSection><Text>{data.text}</Text></OrensSection> 
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
                        <Title>{data.title}</Title>
                        <Close><FontAwesomeIcon onClick={onClose} icon={faXmark}/></Close>
                    </Row>
                    <TextBody>
                        <TextSection title="Location:" text={data.location}/>
                        <TextSection title="Flavor:" text={data.flavor}/>
                        <TextSection title="Best grown In:" text={data.bestGrown}/>
                        <TextSection title="Processing: " text={data.processing}/>
                        <TextSection title="Roasting:" text={data.roasting}/>
                    </TextBody>
            </ColorBox>
        </>}
    </CardContainer>
);

export default CoffeeCard;