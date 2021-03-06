import React, { useState } from 'react';
import styled from 'styled-components/macro';
// import { device } from '../device';
import theme from '../theme';
import CoffeeCard from '../components/coffee-card';
import Explore from './explore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import MobileCoffeeCard from '../components/mobile-coffee-card';
import { coffee_data } from '../data/coffeedata';
import SBSTopBar from '../components/sbsTopBar';

const HomeContainer = styled.div`
    background-color: ${theme.colors.cream};
    a {
        color: ${theme.colors.coffee};
    }
`;

const MainImage = styled.div`
    display: flex;
    width: 100vw;
    img {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
        /* @media (max-width: ${theme.sizes.tablet}) {
            height: auto;
        } */

        @media (max-width: ${theme.sizes.mobile}) {
            height: 50vh;
        }
    }

    @media (max-width: ${theme.sizes.tablet}) {
        flex-direction: column;
    }
    justify-content: center;
    vertical-align: middle;
    align-items: center;

    /* @media (max-width: ${theme.sizes.tablet}) {
        align-items: center
    } */
    /* mask-image: linear-gradient(rgba(0,0,0,1), 80%, transparent); */
`;

const Title = styled.div`
    position: absolute;
    text-align: center;
    color: ${theme.colors.cream};
    font-size: 5rem;
    font-family: 'Fraunces', serif;
    font-weight: normal;
    margin-top: 1rem;
    padding: 0.5rem;

    @media (min-width: ${theme.sizes.aboveTablet}) {
        /* top: 10vh; */
    }
    @media (max-width: ${theme.sizes.tablet}) {
        font-size: 4rem;
    }
    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 2.2rem;
    }

    animation: fadeInAnimation ease 2s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    
    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    
`;

const TopText = styled.div`
    text-shadow: 4px 4px 8px ${theme.colors.coffee};
`;

const BottomText = styled.div`
    text-shadow: 4px 4px 8px ${theme.colors.coffee};
`;

const Spacer = styled.div`
    height: 2rem;

    @media (max-width: ${theme.sizes.mobile}) {
        height: 0rem;
    }
`;

const Down = styled.div`
    position: absolute;
    bottom: 1rem;
    color: ${theme.colors.cream};
    font-size: 5rem;
    animation: fadeInAnimation ease 4s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    
    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
     }
    
    @media (max-width: ${theme.sizes.mobile}) {
        display: none;
    }
`;

const MobileNotice = styled.div`
    color: ${theme.colors.cream};
    font-size: 1rem;
    margin: -2rem 1rem 0.50rem 1rem;
    @media (min-width: ${theme.sizes.mobile}) {
        display: none;
    }

    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 0.7rem;
    }
`;

const TabletNotice = styled.div`
    color: ${theme.colors.cream};
    font-size: 1rem;
    margin: -2rem 1rem 0.50rem 1rem;
    display: none;

    @media ((min-width: ${theme.sizes.mobile})) {
        display: block;
    }

    @media ((max-width: ${theme.sizes.aboveLargeTablet} - 1)) {
        display: block;
    }
`;

const HomeContent = styled.div`
    color: ${theme.colors.coffee};
    padding: 4rem 0rem 6rem 0rem;
    @media (max-width: ${theme.sizes.tablet}) {
        padding: 4rem 0rem 6rem 0rem;
    }
    @media (max-width: ${theme.sizes.mobile}) {
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const ButtonWrap = styled.div`
    text-align: center
`;

const ExploreButton = styled.div`
    box-shadow: 4px 4px 8px ${theme.colors.coffee};
    padding: 1rem 1.5rem 1.5rem 1.5rem; 
    border-radius: 2rem;
    display: inline-block;
    background: ${theme.colors.blue};
    font-family: 'Fraunces', serif;
    font-weight: bold;
    font-size: 2rem;
    margin: 0 auto 4rem auto;
    cursor: pointer;
    color: ${theme.colors.cream};

    :hover {
        background: ${theme.colors.wine};
    }

    @media (max-width: ${theme.sizes.tablet}) {
        font-size: 2.5rem;
    }

    @media (max-width: ${theme.sizes.mobile}) {
        display: none;
        padding: 0rem; 
    }

    
`;

const ExploreButtonSmall = styled.div`
    padding: 1rem 1.5rem 1.5rem 1.5rem; 
    border-radius: 2rem;
    display: inline-block;
    background: ${theme.colors.blue};
    font-size: 2rem;
    font-family: 'Fraunces', serif;
    font-weight: bold;
    margin: 4rem 0 2rem 0;
    cursor: pointer;
    color: ${theme.colors.cream};

    :hover {
        background: ${theme.colors.wine};
    }

    @media (max-width: ${theme.sizes.tablet}) {
        font-size: 2.5rem;
    }
    @media (max-width: ${theme.sizes.mobile}) {
        display: none;
    }
`;

const Heading = styled.div`
    margin: 2rem 8rem 0rem 8rem;
    font-size: 2rem;
    font-family: 'Fraunces', serif;
    font-weight: bold;

    @media (max-width: ${theme.sizes.tablet}) {
        font-size: 1.75rem;
        margin: 2rem 6rem 0rem 6rem;

    }
    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 1.5rem;
        margin: 2rem 2rem 0rem 2rem;
    }
`;

const SmallHeading = styled.div`
    text-align: center;
    margin: 2rem 8rem 0rem 8rem;
    font-size: 1.5rem;
    font-family: 'Fraunces', serif;
    font-weight: bold;
    @media (max-width: ${theme.sizes.tablet}) {
        font-size: 1.5rem;
        margin: 2rem 6rem 0rem 6rem;

    }
    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 1rem;
        margin: 2rem 2rem 0rem 2rem;
`;

const Body = styled.div`
    margin: 2rem 8rem 0rem 8rem;
    font-size: 1.5rem;
    font-family: 'Commissioner', serif;
    font-style: normal;
    font-weight: normal;
    line-height: 2.25rem;

    @media (max-width: ${theme.sizes.tablet}) {
        font-size: 1.25rem;
        line-height: 2rem;
        margin: 2rem 6rem 0rem 6rem;

    }
    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 1rem;
        line-height: 2rem;
        margin: 2rem 2rem 0rem 2rem;

    }
`;

const Capital = styled.span`
    font-size: 6rem;
    font-family: 'Fraunces', serif;
    font-weight: normal;
    @media (max-width: ${theme.sizes.tablet}) {
        font-size: 4rem;
    }
    @media (max-width: ${theme.sizes.mobile}) {
        font-size: 2rem;
    }
`;

const Logo = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    height: 10rem;
    width: auto;
`;

const Row = styled.div`
    display: flex;
    align-items: center;
`;

const Line = styled.span`
    display: inline-flex;
    background-color: black;
    width: 100%;
    height: 1px;
`;

const Link = styled.span`
    color: ${theme.colors.coffee};
    cursor: pointer;
    :hover {
        color: ${theme.colors.wine};
    }
    text-decoration-line: underline;
`;

const TopBar = styled.div`
    display: flex;
    z-index: 999;
    position: fixed;
    top: 0;
`;

export default function Home() {

	const [ explore, setExplore ] = useState(false)
	const exploreOff = () => setExplore(false)
    const exploreOn = () => {
        setExplore(true)
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
       
    return (
        <HomeContainer>
            <TopBar>
            <SBSTopBar 
                companyLogo="http://orenscoffee.com/wp-content/uploads/2021/04/footer.png"
                articleURL="https://orenscoffee.columbiaspectator.com"
                companyURL="https://orenscoffee.com/"
                headline="Bean to Beverage: Your Coffee???s World-Class Journey"/>
            </TopBar>
            { explore ? <Explore onClick={exploreOff}/> :       
            <MainImage>
                <img src="https://sbs-assets.s3.amazonaws.com/orens-coffee/24298B46-EA61-4280-9591-0FA6FE035C07.gif" alt="World map with highlighted coffee regions"/>
                <Title>
                    <TopText><b>From Bean to Beverage:</b></TopText>
                    <BottomText>Your Coffee???s World-Class Journey</BottomText> 
                    <Spacer></Spacer>               
                    <ButtonWrap>                
                    <ExploreButton onClick={exploreOn} > 
                        Start Your Journey Here
                    </ExploreButton>
                </ButtonWrap>  
                </Title>
                <MobileNotice>For the best experience, check out the web version</MobileNotice>   
                <TabletNotice>For the best experience, rotate your device</TabletNotice>   
                <Down> <FontAwesomeIcon icon={faChevronDown}/></Down>
            </MainImage> }
            <HomeContent>
                <Body>
                    <Capital>C</Capital>offee is complicated, but not for the average person looking to grab a morning energy boost before class or work. Roasters and coffee shops have allowed us to easily incorporate coffee drinking into our daily routines, but this simplicity sometimes causes us to overlook the journey coffee takes before it reaches us.
                </Body>
                <Body>
                We tend to forget that coffee production is an international business. The vast majority of the coffee we consume comes from countries near the equator like Indonesia, Kenya, and Costa Rica. Different conditions in each country give rise to unique flavors and aromas and result in an immensely diverse selection of coffees being exported annually. At any given time, beans are being flown from one corner of the world to another to reach their final destination: your cup. 
                </Body>
                <Body>
                Learn about how coffee gets from the farm to your cup and discover the intricacies of each step in the process. Then, get to know three world-class coffee varieties from Indonesia, Kenya, and Costa Rica and what sets them apart from the competition and each other. 
                </Body>

                <Heading>Coffee Selection</Heading>
                <Body>
                Coffee beans from different regions have unique flavors, so roasteries typically start by looking for farms that produce a specific type of bean. For example, if a roastery is looking to add a La Minita Tarrazu coffee to their line of products, the first place to look would be Tarrazu, Costa Rica, the only location where the variety can be found. When choosing a farm, crop quality is not the only metric that is factored into the equation. It is also best practice for roasteries to source beans from farms that pay their workers a living wage. After selecting a farm, roasteries will test the quality of the crop by ???cupping??? a sample, which simply means tasting a coffee for its body (a measure of mouth feel???think thickness), flavor, aromatics, etc. If approved, the roastery then enters the purchasing process.
                </Body>

                <MobileCoffeeCard data={coffee_data[2]}/>

                <Heading>Purchase and Delivery</Heading>
                <Body>
                Purchasing coffee beans is not as easy as it seems. First, the roastery must place an order with a broker, a middleman who facilitates communication and sales between the farmer and roastery. Once an agreement on price has been reached, the broker devises a contract with the farm and an exporter to arrange for delivery to the roastery???s warehouse. Almost all international transportation of beans is done by ship and is done quickly to preserve freshness. However, logistical complications associated with the pandemic have led to delays in delivery. Fortunately, new bags used to hold beans during shipping allow the beans to ???breathe,??? keeping them fresh for longer. Once the beans arrive at the roastery???s warehouse, they are usually cupped once more to verify that they are the ones ordered. From here, the roastery proceeds to roast the beans.
                </Body>

                <MobileCoffeeCard data={coffee_data[0]}/>

                <Heading>Science of Roasting</Heading>
                <Body>
                Before a batch of coffee beans experiences its final, brew-ready roast, roasteries test multiple sample roasts to find the one that draws out the most flavor. Roasting is not a one-size-fits-all process; too little or too much time in the roaster can ruin a high-quality batch of beans. Too light of a roast results in an overly acidic cup of coffee while over-roasting gives the coffee a bitter, burnt taste. Because coffee beans from different parts of the world have differing levels of acidity, their optimal roasting times are unique as well.
                </Body>

                <Body>
                What happens during the roasting process that causes an unappetizing, astringent bean to develop the rich, toasted flavor typically found in a cup of morning brew? A common phenomenon in cooking, the Maillard reaction, does the same job in coffee roasting as it does in any other type of cooking. The Maillard reaction is a reaction between reducing sugars and amino acids that causes browning and the development of the slight bitterness, nuttiness, and sometimes earthiness associated with coffee. The sugar content of each type of bean is crucial in determining what the coffee will taste like after roasting and the exact temperature and time at which it should be roasted. Miss the mark and the result is a suboptimal cup of joe. After roasting is complete, the coffee is transported to a roastery???s customer or their own coffee shop and is ready to be brewed and served. 
                </Body>

                <MobileCoffeeCard data={coffee_data[1]}/>

                <ButtonWrap>                
                    <ExploreButtonSmall onClick={exploreOn} > 
                        Start Your Journey Here
                    </ExploreButtonSmall>
                </ButtonWrap>  
                
                <Row>
                    <Line></Line>
                    <a href="https://orenscoffee.com/" target="_blank">
                        <Logo>
                            <img src="https://sbs-assets.s3.amazonaws.com/orens-coffee/Screen+Shot+2022-01-31+at+11.38.56+PM.png" alt="Oren's logo"/>
                        </Logo>
                    </a>
                    <Line></Line>
                </Row>

                <SmallHeading>Sponsored content with <a href="https://orenscoffee.com/" target="_blank" ><Link>Oren???s Coffee</Link></a></SmallHeading>

                <Body>
                    Oren???s Coffee is a New York City-based specialty coffee chain focused on providing its customers with the highest 
                    quality single-origin coffees since 1986. Each of the single-origin coffees mentioned can be found at Oren???s Coffee 
                    as a handcrafted pick-me-up, whole beans, or ground coffee. Oren???s Coffee has a store located conveniently next to 
                    Tom???s Restaurant and Milano Market at 2882 Broadway. 
                </Body>
            </HomeContent>
        </HomeContainer>
    )

}
