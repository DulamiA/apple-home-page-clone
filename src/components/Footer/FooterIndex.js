import React from "react";
import {Box, Container, Row, Column, FooterLink, Heading, Section, Link, Line, Container2, Container3} from "./FooterElements";

function footer(){
    return(
        <Box>
            <Container>
                <Section>1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made. Sales tax may be assessed on full value of a new device purchase. In-store trade-in requires presentation of a valid photo ID (local law may require saving this information). Offer may not be available in all stores, and may vary between in-store and online trade-in. Some stores may have additional requirements. Apple or its trade-in partners reserve the right to refuse or limit quantity of any trade-in transaction for any reason. More details are available from Apple’s trade-in partner for trade-in and recycling of eligible devices. Restrictions and limitations may apply.</Section>
                <Section>Available in the U.S. on <Link>apple.com</Link>, in the Apple Store app, and at Apple Stores.</Section>
                <Section>To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad that supports and has the latest version of iOS or iPadOS. Apple Card is subject to credit approval, available only for qualifying applicants in the United States, and issued by Goldman Sachs Bank USA, Salt Lake City Branch.</Section>
                <Section>If you reside in the U.S. territories, please call Goldman Sachs at 877-255-5923 with questions about Apple Card.</Section>
                <Section>Learn more about how Apple Card applications are evaluated at support <Link>apple.com/kb/HT209218</Link> apple.com/kb/HT209218.</Section>
                <Section>A subscription is required for Apple TV+.</Section>
                <Line/> 
                <Row>
                    <Column>
                        <Heading>Shop and Learn</Heading>
                        <FooterLink href="/store">Store</FooterLink>
                        <FooterLink href="/mac">Mac</FooterLink>
                        <FooterLink href="/ipad">iPad</FooterLink>
                        <FooterLink href="/iphone">iPhone</FooterLink>
                        <FooterLink href="/watch">Watch</FooterLink>
                        <FooterLink href="/vision">Vision</FooterLink>
                        <FooterLink href="/airpods">AirPods</FooterLink>
                        <FooterLink href="/tv&home">TV & Home</FooterLink>
                        <FooterLink href="/airtag">AirTag</FooterLink>
                        <FooterLink href="/accessories">Accessories</FooterLink>
                        <FooterLink href="/giftcards">Gift Cards</FooterLink>
                        <Heading>Apple Wallet</Heading>
                        <FooterLink href="/wallet">Wallet</FooterLink>
                        <FooterLink href="/applecards">Apple Card</FooterLink>
                        <FooterLink href="/applepay">Apple Pay</FooterLink>
                        <FooterLink href="/applecash">Apple Cash</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Account</Heading>
                        <FooterLink href="/#">Manage Your Apple ID</FooterLink>
                        <FooterLink href="#">Apple Store Account</FooterLink>
                        <FooterLink href="#">iCloud.com</FooterLink>
                        <Heading>Entertainment</Heading>
                        <FooterLink href="#">Apple One</FooterLink>
                        <FooterLink href="#">Apple TV+</FooterLink>
                        <FooterLink href="#">Apple Music</FooterLink>
                        <FooterLink href="#">Apple Arcade</FooterLink>
                        <FooterLink href="#">Apple Fitness+</FooterLink>
                        <FooterLink href="#">Apple News+</FooterLink>
                        <FooterLink href="#">Apple Podcasts</FooterLink>
                        <FooterLink href="#">Apple Books</FooterLink>
                        <FooterLink href="#">Apple Store</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Apple Store</Heading>
                        <FooterLink href="#">Find a Store</FooterLink>
                        <FooterLink href="#">Genius Bar</FooterLink>
                        <FooterLink href="#">Today at Apple</FooterLink>
                        <FooterLink href="#">Apple Camp</FooterLink>
                        <FooterLink href="#">Apple Store App</FooterLink>
                        <FooterLink href="#">Certified Refurbished</FooterLink>
                        <FooterLink href="#">Apple Trade In</FooterLink>
                        <FooterLink href="#">Financing</FooterLink>
                        <FooterLink href="#">Carrier Deals at Apple</FooterLink>
                        <FooterLink href="#">Order Status</FooterLink>
                        <FooterLink href="#">Shopping Help</FooterLink>
                    </Column>
                    <Column>
                        <Heading>For Business</Heading>
                        <FooterLink href="#">Apple and Business</FooterLink>
                        <FooterLink href="#">Shop for Business</FooterLink>
                        <Heading>For Education</Heading>
                        <FooterLink href="#">Apple and Education</FooterLink>
                        <FooterLink href="#">Shop for K-12</FooterLink>
                        <FooterLink href="#">Shop for College</FooterLink>
                        <Heading>For Healthcare</Heading>
                        <FooterLink href="#">Apple in Healthcare</FooterLink>
                        <FooterLink href="#">Health on Apple Watch</FooterLink>
                        <FooterLink href="#">Health Records on iPhone</FooterLink>
                        <Heading>For Government</Heading>
                        <FooterLink href="#">Shop for Government</FooterLink>
                        <FooterLink href="#">Shop for Vetarans and Military</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Apple Values</Heading>
                        <FooterLink href="#">Accessibility</FooterLink>
                        <FooterLink href="#">Education</FooterLink>
                        <FooterLink href="#">Environment</FooterLink>
                        <FooterLink href="#">Inclusion and Diversity</FooterLink>
                        <FooterLink href="#">Privacy</FooterLink>
                        <FooterLink href="#">Racial Equity and Justice</FooterLink>
                        <FooterLink href="#">Supplier Responsibility</FooterLink>
                        <Heading>About Apple</Heading>
                        <FooterLink href="#">Newsroom</FooterLink>
                        <FooterLink href="#">Apple Leadership</FooterLink>
                        <FooterLink href="#">Career Opportunities</FooterLink>
                        <FooterLink href="#">Investors</FooterLink>
                        <FooterLink href="#">Ethics & Complience</FooterLink>
                        <FooterLink href="#">Events</FooterLink>
                        <FooterLink href="#">Contact Apple</FooterLink>
                    </Column>
                </Row>
                <Section>More ways to shop: <a href="#">Find an Apple Store</a> or <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.</Section>
                <Line/> 
                <Container2>
                    <Section>Copyright © 2024 Apple Inc. All rights reserved.</Section>
                    <Container3>
                        <FooterLink>Privacy Policy </FooterLink>
                        <span style={{textIndent:'10px'}}> | </span>
                        <FooterLink style={{textIndent:'10px'}}>Terms of Use </FooterLink>
                        <span style={{textIndent:'10px'}}> | </span>
                        <FooterLink style={{textIndent:'10px'}}>Sales and Refunds </FooterLink>
                        <span style={{textIndent:'10px'}}> | </span>
                        <FooterLink style={{textIndent:'10px'}}>Legal </FooterLink>
                        <span style={{textIndent:'10px'}}> | </span>
                        <FooterLink style={{textIndent:'10px'}}>Site Map </FooterLink>
                    </Container3>
                </Container2>
            </Container>
        </Box>
    )
}

export default footer