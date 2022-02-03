import React from 'react';
import styled from 'styled-components';
import { device } from '../device';
import theme from '../theme';

const HomeContainer = styled.div`
    background-color: ${theme.colors.cream};
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
   font-weight: normal;
`;

const TopText = styled.div`
`;

const BottomText = styled.div`
`;

const HomeContent = styled.div`
    color: ${theme.colors.coffee};
    padding: 4rem 0rem 2rem 0rem;
`;

const Subtitle = styled.div`
    text-align: center;
    font-size: 4rem;
    font-family: 'Fraunces', serif;
    font-weight: bold;
    text-decoration-line: underline;
    margin-bottom: 4rem;
`;

const Heading = styled.div`
    margin: 2rem 8rem 0rem 8rem;
    font-size: 2rem;
    font-family: 'Fraunces', serif;
    font-weight: bold;
`;

const SmallHeading = styled.div`
    text-align: center;
    margin: 2rem 8rem 0rem 8rem;
    font-size: 1.5rem;
    font-family: 'Fraunces', serif;
    font-weight: normal;
`;

const Body = styled.div`
    margin: 2rem 8rem 0rem 8rem;
    font-size: 1.5rem;
    font-family: 'Commissioner', serif;
    font-style: normal;
    font-weight: normal;
    line-height: 2.25rem;
`;

const Capital = styled.span`
    font-size: 6rem;
    font-family: 'Fraunces', serif;
    font-weight: normal;
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
            <Subtitle> 
                Start Your Journey Here
            </Subtitle>

            <Body>
                <Capital>C</Capital>offee is complicated, but not for the average person looking to grab a morning energy boost 
                before class or work. Roasters and coffee shops have allowed us to easily incorporate coffee drinking into our 
                daily routines, but this simplicity sometimes causes us to overlook the journey coffee takes before it reaches us.
            </Body>
            <Body>
                We tend to forget that coffee-making is an international business. The vast majority of the coffee we consume 
                comes from countries near the equator like Indonesia, Kenya, and Costa Rica. Different conditions in each country 
                give rise to unique flavors and aromas and result in an immensely diverse selection of coffees being exported 
                yearly. At any given time, beans are being flown from one corner of the world to another to reach their final 
                destination: your cup. 
            </Body>
            <Body>
                Learn about how coffee gets from the farm to your cup and discover the intricacies of each step in the process. 
                Then, get to know three world-class coffee varieties from Indonesia, Kenya, and Costa Rica and what sets them 
                apart from the competition and each other.
            </Body>

            <Heading>Coffee Selection</Heading>
            <Body>
                Coffee beans from different regions taste differently, so roasteries typically start by looking at farms in regions 
                that produce a specific type of bean. For example, if a roastery is looking to add a La Manita coffee to their 
                line of products, the first place to look would be Costa Rica as it grows best there. When choosing a farm, crop 
                quality is not the only thing that is factored into the equation. It is also best practice for roasteries to source 
                beans from farms that pay their farmers a fair wage. After selecting a farm, roasteries will test the quality of 
                the crop by “cupping” a sample, which simply means tasting a coffee for its body (a measure of mouth feel, think 
                thickness), flavor, aromatics, etc. If approved, the roastery then enters the purchasing process.
            </Body>

            <Heading>Purchase and Delivery</Heading>
            <Body>
                Purchasing coffee beans is not as easy as it seems. First, the roastery must place an order with a broker, a 
                middleman that facilitates communication and sales between the farmer and roastery. Once an agreement on price has 
                been reached, the broker makes a contract with the farm and an exporter to arrange for delivery to the roastery’s 
                warehouse. Before the coronavirus pandemic, international delivery via plane was fairly efficient and routes were 
                well established. However, logistical complications associated with the pandemic have seen delays in delivery. To 
                combat this, coffee exporters worldwide have started using bags designed to let the coffee beans “breathe,” keeping 
                them fresh for longer. Once the beans arrive at the roastery’s warehouse, it is usually cupped once more to verify 
                that they are the ones ordered. From here, the roastery proceeds to roast the beans.
            </Body>

            <Heading>Science of Roasting</Heading>
            <Body>
                Before a batch of coffee beans experiences its final, brew-ready roast, roasteries test multiple sample roasts to 
                find the one that draws out the most flavor. Like many things, roasting is not a one size fits all process; too 
                little or too much time in the roaster can ruin a high quality batch of beans. Too light of a roast results in an 
                overly acidic cup of coffee while over roasting gives the coffee a bitter, burnt taste. Because coffee beans from 
                different parts of the world have differing levels of acidity, their optimal roasting times are unique as well.
            </Body>

            <Body>
                What happens during the roasting process that causes an unappetizing, astringent bean to develop the rich, toasted 
                flavor typically found in a cup of morning brew? A common phenomenon in cooking, the Maillard reaction, does the 
                same job in coffee roasting as it does in any other type of cooking. The Maillard reaction is a reaction between 
                reducing sugars and amino acids that causes browning and the development of the slight bitterness, nuttiness, and 
                sometimes earthiness associated with coffee. The sugar content of each type of bean is crucial in determining what 
                the coffee will taste like after roasting and the exact temperature and time it should be roasted at. Miss the mark 
                and the result is a sub-optimal cup of joe. After roasting is complete, the coffee is transported to a roastery’s 
                customer or their own coffee shop and is ready to be brewed and served.
            </Body>
            
            <Row>
                <Line></Line>
                <Logo>
                    <img src="https://sbs-assets.s3.amazonaws.com/orens-coffee/Screen+Shot+2022-01-31+at+11.38.56+PM.png" alt="Oren's logo"/>
                </Logo>
                <Line></Line>
            </Row>

            <SmallHeading>Sponsored content with Oren’s Coffee</SmallHeading>

            <Body>
                Oren’s Coffee is a New York City-based specialty coffee chain focused on providing its customers with the highest 
                quality single-origin coffees since 1986. Each of the single-origin coffees mentioned can be found at Oren’s Coffee 
                as a handcrafted pick-me-up, whole beans, or ground coffee. Oren’s Coffee has a store located conveniently next to 
                Tom’s Restaurant and Milano Market at 2882 Broadway. 
            </Body>
            
        </HomeContent>



    </HomeContainer>
);

export default Home;