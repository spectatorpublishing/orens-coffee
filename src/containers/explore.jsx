import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';

const redPinUrl = "https://sbs-assets.s3.amazonaws.com/orens-coffee/pushpin+3.png"
const mapUrl = "https://sbs-assets.s3.amazonaws.com/orens-coffee/BE69181A-6087-425B-9A61-ED9EF9292BE97CC2ED9C-F0CB-44A6-87F5-7982A8191ED5.png"

const Map = styled.img`
	width: 100vw;
	height: 100vh;
	object-fit: cover;
`

const PinImage = styled.img`
	position: absolute;
	width: 2.6%;
	left: ${props => `${props.xCord}vw`};
	top: ${props => `${props.yCord}vw`};
`

const Modal = styled.div`
	display: ${props => props.visible ? "block" : "none"};
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: 998;
	background-color: transparent;
`

// placeholder, to be replaced with the actual card
const Card = styled.div`
	display: ${props => props.visible ? "block" : "none"};
	position: absolute;
	left: 50%;
	top: 50%;
    transform: translate(-50%, -50%);
	z-index: 999;
	width: 60vw;
	height: 50vh;
	background-color: ${theme.colors.cream};
`

const CardPopUp = ({ cb, children, visible }) => (
	<>
		<Modal onClick={cb} visible={visible} />
		{children}
	</>
)

// When PinImage is clicked, the wrappedComponent Card
// pops up at the center of the page and can be toggled
// clicking the background (i.e the transparent Modal
// component covering the entire view).
const withCard = Card => ({ xCord, yCord }) => {
	const [ visible, setVisible ] = useState(false)
	const toggle = () => setVisible(!visible)

	return (
		<>
			<PinImage
				src={redPinUrl}
				xCord={xCord}
				yCord={yCord}
				onClick={toggle} />

			<CardPopUp cb={toggle} visible={visible}>
				<Card visible={visible} />
			</CardPopUp>
		</>
	)
}

const Kenya = withCard(Card)
const Manita = withCard(Card)
const Sumatra = withCard(Card)
const NYC = withCard(Card)


export default function Explore() {
	return (
		<>
			<Map src={mapUrl} />

			<Kenya xCord="15.5" yCord="11.75" />
			<Manita xCord="15.5" yCord="5" />
			<Sumatra xCord="75.5" yCord="11.75" />
			<NYC xCord="50.5" yCord="11.75" />
		</>
	)
}
