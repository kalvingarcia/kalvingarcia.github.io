"use client"
import {tss} from "./source/components/themer";
import PalettePicker from "./content/palette-picker";
import ProjectList from "./content/project-list";
import FeaturedProject from "./content/featured-project";

const useStyles = tss.create(({theme}) => ({
    homepage: {
        width: "100%",
        maxHeight: "100vh",
        overflowX: "hidden",
        scrollBehavior: "smooth"
    },
    content: {
        margin: "auto",
        marginTop: "40px",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        maxWidth: 1280,

        "@media (max-width: 1200px)": {
            flexDirection: "column"
        }
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

    const {classes} = useStyles();
    return (
        <>
            <PalettePicker />
            <section id="homepage" className={classes.homepage}>
                <FeaturedProject show />
                <ProjectList />
            </section>
        </>
    );
}