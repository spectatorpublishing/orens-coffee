import React, { useState } from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faX, faXmark } from '@fortawesome/free-solid-svg-icons';
import CDSShareButton from '../components/CDSShareButton';

const Wrapper = styled.div`
    width: 100vw;
    height: fit-content;
    background-color: black;
    display: flex;
    flex-direction: row;
`;

const Logos = styled.div`
    display: flex;
    flex-direction: row;
    height: fit-content;
    width: fit-content;
    margin: 0.5rem auto 0.5rem 0.5rem;

    a {
        height: fit-content;
        width: fit-content;
        margin-top: auto;
        margin-bottom: auto;
    }
`;

const Logo = styled.div`
    height: fit-content;
    width: fit-content;
    margin: auto 0.5rem auto 0.5rem;
    img {
        margin: auto 0rem auto 0rem;
        width: auto;
        height: 1.5rem;
    }

    @media (max-width: ${theme.sizes.mobile}) {
        img {
            width: auto;
            height: 1rem;
        }
    }
`;

const SBSLogo = styled.div`
    height: fit-content;
    width: fit-content;
    margin: auto 0.5rem auto 0.5rem;
    img {
        width: auto;
        height: 2.5rem;
    }

    @media (max-width: ${theme.sizes.mobile}) {
        img {
            width: auto;
            height: 1.4rem;
        }
    }
`;

const X = styled.div`
    height: fit-content;
    width: fit-content;
    margin: auto 0.5rem auto 0rem;
    color: grey;

    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 0.8rem;
        margin: auto 0.2rem auto 0rem;
    }
`;

const CenterText = styled.div`
    display: flex;
    flex-direction: row;
    color: white;
    font-family: 'Fraunces', serif;
    font-size: 1.5rem;
    height: fit-content;
    width: fit-content;
    margin: auto 10rem auto 1rem;

    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 0.8rem;
        margin: auto 0.2rem auto 0.2rem;
    }
`;

const MoreInfoIcon = styled.div`
    height: fit-content;
    width: fit-content;
    margin: auto 0.5rem auto 0.5rem;
    line-height: 1rem;
    svg {
        font-size: 1rem;
    }
    color: grey;

    : hover {
        color: white;

        .popup {
            display: block;
        }
    }

    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 0.6rem;
    }
`;

const ShareButton = styled.div`
    margin: auto 1.5rem auto auto;
    width: fit-content;
    height: fit-content;

    @media (max-width: ${theme.sizes.mobile}) {
        display: none;
        margin: 0rem;
    }
`;

const InfoPopUp = styled.div`
    display: none;
    background-color: grey;
    position: absolute;
    z-index: 99;
    top: 0
    left: 0;
    font-size: 0.8rem;
    line-height: 1rem;
    width: 12rem;
    padding: 1rem;
    margin: 0.2rem;
    font-family: 'Fraunces', serif;

    @media (max-width: ${theme.sizes.mobile}) {
        right: 0;
    }
`;

const SBSTopBar = ({companyLogo, companyURL, articleURL, headline}) => {
    const [isPopUpVisible, togglePopUp] = useState(false);
    
    return (
        <Wrapper>
                <Logos>
                    <a href="https://www.columbiaspectator.com/sponsored-content/">
                        <SBSLogo><img src="https://sbs-assets.s3.amazonaws.com/SBS_White.png"/></SBSLogo>
                    </a>
                    <X><FontAwesomeIcon icon={faX}/></X>
                    <a href={companyURL}>
                        <Logo><img src={companyLogo}/></Logo>
                    </a>
                </Logos>
                <CenterText>Sponsored Post<MoreInfoIcon><FontAwesomeIcon icon={faCircleQuestion}/><InfoPopUp className='popup'>This post was created by Spectator Brand Studio, Columbia Spectator's brand marketing arm. Columbia Spectator's news and editorial teams were not involved in the creation of this post.</InfoPopUp></MoreInfoIcon></CenterText>
                <ShareButton>
                    <CDSShareButton canonical_url={articleURL} headline={headline}/>
                </ShareButton>
            </Wrapper>
    );
    
};

export default SBSTopBar;