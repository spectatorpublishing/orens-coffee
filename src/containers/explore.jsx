import React, { useState } from 'react';
import styled from 'styled-components';
import { cover } from 'intrinsic-scale';
import theme from '../theme';
import useWindowDimensions from '../hooks/window.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import CoffeeCard from '../components/coffee-card';
import { coffee_data } from '../data/coffeedata';
import { orens_info } from '../data/coffeedata';

const redPinUrl = "https://sbs-assets.s3.amazonaws.com/orens-coffee/pushpin+3.png"
const map = {
	url: "https://sbs-assets.s3.amazonaws.com/orens-coffee/BE69181A-6087-425B-9A61-ED9EF9292BE97CC2ED9C-F0CB-44A6-87F5-7982A8191ED5.png",
	width: 2376,
	height: 1584,
}

// compute pin location on map
// iw: image width
// ih: image height
// x:  image displacement along the x axis
// y:  image displacement along the y axis
const computeLocation = (iw, ih, x, y) => (
	{
		kenya: [
			iw * 0.565 + x,
			ih * 0.54 + y
		],
		manita: [
			iw * 0.156 + x,
			ih * 0.487 + y
		],
		sumatra: [
			iw * 0.774 + x,
			ih * 0.553 + y
		],
		nyc: [
			iw * 0.205 + x,
			ih * 0.313 + y
		]
	}
)

const Map = styled.img`
	width: 100vw;
	height: 100vh;
	object-fit: cover;
	/* @media (max-width: ${theme.sizes.tablet}) {
            height: auto;
    } */
`

const BackButton = styled.div`
	position: absolute;
    color: ${theme.colors.cream};
	top: 2rem;
	left: 2rem;
	cursor: pointer;
	font-family: 'Commissioner', serif;
    font-weight: normal;
	font-size: 2rem;
`

const PinImage = styled.img`
	position: absolute;
	cursor: pointer;
	width: 2.6%;
	left: ${props => `${props.xCord}px`};
	top: ${props => `${props.yCord}px`};
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
const Down = styled.div`
    position: absolute;
    bottom: 1rem;
    color: ${theme.colors.cream};
    font-size: 5rem;
	margin-left: auto;
	margin-right: auto;
	left: 0;
	right: 0;
	text-align: center;
`;

// placeholder, to be replaced with the actual card
const Card = styled.div`
	display: ${props => props.visible ? "block" : "none"};
	position: absolute;
	left: 50%;
	top: 50%;
    transform: translate(-50%, -50%);
	z-index: 999;
	width: 75vw;
	height: 50vh;
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
const withCard = Card => ({ xCord, yCord, location }) => {
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
				<Card visible={visible}>
				{(location === "Kenya") ? 
						<CoffeeCard data={coffee_data[0]} onClose={toggle}/>
						: (location === "Manita") ? 
						<CoffeeCard data={coffee_data[1]} onClose={toggle}/>
						: (location === "Sumatra") ? 
						<CoffeeCard data={coffee_data[2]} onClose={toggle}/>
						: <CoffeeCard data={orens_info[0]} onClose={toggle}/>}
					</Card>
			</CardPopUp>
		</>
	)
}

const Kenya = withCard(Card)
const Manita = withCard(Card)
const Sumatra = withCard(Card)
const NYC = withCard(Card)

export default function Explore(props) {
	const { width: vw, height: vh } = useWindowDimensions();
	const { width: iw, height: ih, x, y } = cover(vw, vh, map.width, map.height)
	const marks = computeLocation(iw, ih, x, y)

	return (
		<>
			<BackButton onClick={props.onClick}><FontAwesomeIcon icon={faChevronLeft}/> Back</BackButton>
			<Map src={map.url} />
			<Kenya xCord={marks.kenya[0]} yCord={marks.kenya[1]} location="Kenya" />
			<Manita xCord={marks.manita[0]} yCord={marks.manita[1]} location="Manita"/>
			<Sumatra xCord={marks.sumatra[0]} yCord={marks.sumatra[1]} location="Sumatra"/>
			<NYC xCord={marks.nyc[0]} yCord={marks.nyc[1]} location="NYC"/>
			<Down><FontAwesomeIcon icon={faChevronDown}/></Down>
		</>
	)
}
