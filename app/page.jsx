"use client"
import {useState, useEffect} from "react";
import {tss} from "./source/components/themer";
import PalettePicker from "./content/palette-picker";
import ProjectList from "./content/project-list";
import FeaturedProject from "./content/featured-project";
import { Icon } from "./source/components/icon-button";
import { Label } from "./source/components/typography";

const useStyles = tss.create(({theme, showLogo}) => ({
    homepage: {
        width: "100%",
        maxHeight: "100vh",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        scrollbarGutter: "stable"
    },
    content: {
        position: "relative",
        margin: "auto",
        marginTop: "80px",
        width: "100%",
        maxWidth: 1280,
    },
    logoContainer: {
        cursor: "pointer",
        position: "absolute",
        top: "-40px",
        left: "40px",
        width: "4rem",
        height: "4rem",
        overflow: "hidden",
    },
    logo: {
        color: theme.secondary.accent.alpha(0.75).hexa(),
        fontSize: "4rem",
        transformOrigin: "bottom left",
        transform: showLogo? "none" : "translate(-100%)",
        transition: showLogo? "transform 300ms ease-out" : "transform 150ms ease-in"
    },
    accredation: {
        margin: "auto",
        textAlign: "center",
        padding: 10,
        fontSize: "0.75rem",
        color: theme.secondary.accent.alpha(0.75).hexa()
    }
}));

export default function Projects({}) {
    const [showLogo, setShowLogo] = useState(true);
    const setScroller = element => {
        const checkScroll = ({target}) => {
            setShowLogo(!(target.scrollTop > 0));
        }
        element?.addEventListener("scroll", checkScroll);
    };

    const [showFeatured, setShowFeatured] = useState(false);
    const [showList, setShowList] = useState(false);
    useEffect(() => {
        setTimeout(() => setShowFeatured(true));
        setTimeout(() => setShowList(true), 200);
    }, []);

    const {classes} = useStyles({showLogo});
    return (
        <>
            <PalettePicker />
            <section ref={setScroller} id="homepage" className={classes.homepage}>
                <div className={classes.content}>
                    <div className={classes.logoContainer} onClick={() => setTimeout(() => window.location.href = "https://kalvingarcia.com/")}>
                        <Icon className={classes.logo} icon="logo" />
                    </div>
                    <FeaturedProject show={showFeatured} />
                    <ProjectList show={showList} />
                </div>
                <Label className={classes.accredation}>
                    Website designed and built by Kalvin Garcia.
                </Label>
            </section>
        </>
    );
}