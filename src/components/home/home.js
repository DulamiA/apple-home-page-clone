import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import "../home/home.css";
import visionProLogo from "../../images/hero_logo_apple_vision_pro_large.png";
import watchLogo from "../../images/promo_logo_apple_watch_unity_large.png";
import watchseries9Logo from "../../images/promo_logo_apple_watch_series_9_large.png";
import watchUltra2Logo from "../../images/promo_logo_apple_watch_ultra2_large.png";
import cardLogo from "../../images/logo_card_large.png";
import tradeinLogo from "../../images/logo_tradein_large.png";
import flowerMoon from "../../images/tv/flowerMoon.jpg";
import monarch from "../../images/tv/mnarch.jpg";
import forAllMankind from "../../images/tv/forAllMankind.jpg";
import slowHorses from "../../images/tv/slowHorses.jpg";
import criminal from "../../images/tv/criminal.jpg";
import family from "../../images/tv/family.jpg";
import ted from "../../images/tv/ted.jpg";
import still from "../../images/tv/still.jpg";
import morningShow from "../../images/tv/morningShow.jpg";
import lessons from "../../images/tv/lessonsInChemistry.jpg";

const slideTransitionTime = 3; // Time in seconds for each slide transition
const slideDuration = 5; // Duration each slide stays on screen in seconds

const slides = [
    flowerMoon, monarch, forAllMankind, slowHorses, criminal, family, ted,  still, morningShow, lessons
];

const variants = {
    enter: (direction) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction) => {
        return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        };
    }
};

const Home = ()=>{
    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            paginate(1);
        }, slideDuration * 1000);

        return () => clearInterval(interval);
    }, [page]);

    return(
        <div>
            <Card
                background={'visionPro'}
                titleClass={'visionPro-title'}
                titleImage={visionProLogo}
                titleImgeClass={'visionProLogo'}
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
                        titleImgeClass={'watchLogo'}
                        titleSubheading={'Unity in bloom.'}
                        link1={'Explore the new Black Unity Sports Band >'}
                    />
                </div>
                <div className="section2-content">
                    <Card
                        background={'watchSeries9'}
                        titleClass={'iphone15pro-title'}
                        titleImage={watchseries9Logo}
                        titleImgeClass={'watchseries9Logo'}
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
                        titleImgeClass={'watchUltra2Logo'}
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
                        titleImgeClass={'cardLogo'}
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
                        titleImgeClass={'tradeInLogo'}
                        titleSubheading={'Get $180-$620 in credit when you trade in iPhone 11 or higher.'}
                        link1={'See what your device is worth >'}
                    />
                </div>
            </div>
            <div className="slideshow-container">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.img
                        key={page}
                        src={slides[page % slides.length]}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 30 },
                            opacity: { duration: slideTransitionTime }
                        }}
                    />
                </AnimatePresence>
            </div>
        </div>
    )
}

function Card({titleHeading, titleImage, titleSubheading, titlePara, link1, link2, background, titleClass, titleHeadingClass, titleImgeClass}){
    return(
        <a className="mainLink" href="#">
            <div className={background}>
                <div className={titleClass}>
                    <h2 className={titleHeadingClass}>{titleHeading}</h2>
                    <img className={titleImgeClass} src={titleImage}/>
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

export default Home