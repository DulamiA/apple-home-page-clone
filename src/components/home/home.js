import React from "react";
import "../home/home.css";
import visionProLogo from "../../images/hero_logo_apple_vision_pro_large.png";
import watchLogo from "../../images/promo_logo_apple_watch_unity_large.png";
import watchseries9Logo from "../../images/promo_logo_apple_watch_series_9_large.png";
import watchUltra2Logo from "../../images/promo_logo_apple_watch_ultra2_large.png";
import cardLogo from "../../images/logo_card_large.png";
import tradeinLogo from "../../images/logo_tradein_large.png";

function home(){
    return(
        <div>
            <Card
                background={'visionPro'}
                titleClass={'visionPro-title'}
                titleImage={visionProLogo}
                titleSubheading={'Welcome to the era of spatial computing.'}
                titlePara={'Available stating 2.2'}
                link1={'Learn more >'}
                link2={'Pre-order >'}
            />
            <Card
                background={'iphone15pro'}
                titleClass={'iphone15pro-title'}
                titleHeadingClass={'iPhone15pro-title-heading'}
                titleHeading={'iPhone 15 Pro'}
                titleSubheading={'Titanium. So strong. So light. So Pro.'}
                link1={'Learn more >'}
                link2={'Buy >'}
            />
            <Card
                background={'iphone15'}
                titleClass={'iphone15-title'}
                titleHeadingClass={'iPhone15pro-title-heading'}
                titleHeading={'iPhone 15'}
                titleSubheading={'New camera. New design. Newphoria.'}
                link1={'Learn more >'}
                link2={'Buy >'}
            />
            <div className="section2">
                <div className="section2-content">
                    <Card
                        background={'watch'}
                        titleClass={'iphone15pro-title'}
                        titleImage={watchLogo}
                        titleSubheading={'Unity in bloom.'}
                        link1={'Explore the new Black Unity Sports Band >'}
                    />
                </div>
                <div className="section2-content">
                    <Card
                        background={'watchSeries9'}
                        titleClass={'iphone15pro-title'}
                        titleImage={watchseries9Logo}
                        titleSubheading={'Smarter. Brighter. Mightier.'}
                        link1={'Learn more >'}
                        link2={'Buy >'}
                    />
                </div>
            </div>
            <div className="section2">
                <div className="section2-content">
                    <Card
                        background={'watchUntra2'}
                        titleClass={'iphone15-title'}
                        titleImage={watchUltra2Logo}
                        titleSubheading={'Next level adventure.'}
                        link1={'Learn more >'}
                        link2={'Buy >'}
                    />
                </div>
                <div className="section2-content">
                    <Card
                        background={'mbp'}
                        titleClass={'iphone15-title'}
                        titleHeadingClass={'iPhone15pro-title-heading'}
                        titleHeading={'MacBook Pro'}
                        titleSubheading={'Mind-blowing. Head-turning.'}
                        link1={'Learn more >'}
                        link2={'Buy >'}
                    />
                </div>
            </div>
            <div className="section2">
                <div className="section2-content">
                    <Card
                        background={'card'}
                        titleClass={'iphone15-title'}
                        titleImage={cardLogo}
                        titleSubheading={'Get up to 3% Daily Cash back with every purchase.'}
                        link1={'Learn more >'}
                        link2={'Apply Now >'}
                    />
                </div>
                <div className="section2-content">
                    <Card
                        background={'tradeIn'}
                        titleClass={'iphone15-title'}
                        titleImage={tradeinLogo}
                        titleSubheading={'Get $180-$620 in credit when you trade in iPhone 11 or higher.'}
                        link1={'See what your device is worth >'}
                    />
                </div>
            </div>
        </div>
    )
}

function Card({titleHeading, titleImage, titleSubheading, titlePara, link1, link2, background, titleClass, titleHeadingClass}){
    return(
        <a className="mainLink" href="#">
            <div className={background}>
                <div className={titleClass}>
                    <h2 className={titleHeadingClass}>{titleHeading}</h2>
                    <img src={titleImage}/>
                    <h3 className="title-sub-heading">{titleSubheading}</h3>
                    <p className="title-para">{titlePara}</p>
                </div>
                <div className="links-section">
                    <a className="link" href="#">{link1}</a>
                    <a className="link" href="#">{link2}</a>
                </div>
            </div>
        </a>
    )
}

export default home