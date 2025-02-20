"use client"
import {useCallback, useEffect, useRef, useState} from "react";
import {useSearchParams, useRouter} from "next/navigation";
import {tss} from "../source/components/themer";
import {Heading, Title, Label} from "../source/components/typography";
import IconButton, {Icon} from "../source/components/icon-button";
import Table, {Row} from "../source/components/table";
import Modal from "../source/components/modal";
import Remark from "../source/components/remark";
import Chip from "../source/components/chip";
import {Effect} from "../source/components/animation";
import { useFadeAnimation } from "../source/hooks/fade";

const useStyles = tss.create(({theme}) => ({
    projects: {
        padding: 40,
        margin: "auto",
        width: "100%",
        maxWidth: 1280
    },
    flavorText: {
        color: theme.secondary.accent.hex()
    },
    headline: {
        fontSize: "6rem",
    },
    list: {
        width: "100%",
        marginTop: 50,
        borderCollapse: "collapse",
        "& .column-3": {
            maxWidth: 150
        },
        [`@media (max-width: ${1000}px)`]: {
            "& .column-3": {
                display: "none"
            }
        },
        [`@media (max-width: ${1200}px)`]: {
            "& .column-2": {
                display: "none"
            }
        }
    },
    openModal: {
        cursor: "pointer",
        "&:hover": {
            color: theme.primary.accent.hex(),
            "& i": {
                color: theme.primary.accent.hex(),
            }
        },
        "& i": {
            display: "inline-block",
            fontSize: "1rem"
        }
    },
    technologies: {
        display: "flex",
        flexWrap: "wrap",
        gap: 5
    },
    links: {
        display: "flex",
        gap: 5,
        [`@media (max-width: ${600}px)`]: {
            flexDirection: "column"
        }
    },
    modal: {
        maxWidth: 1000,
        height: "fit-content",
        maxHeight: "80%",
        top: "10%",
        left: "calc((100% - min(80%, 1000px)) / 2)"
    }
}));

export default function ProjectList({show}) {
    const [open, setOpen] = useState(false);
    const [markdown, setMarkdown] = useState("");
    const openModal = useCallback(async directory => {
        setMarkdown(await fetch(`./projects/${directory}.md`).then(response => response.text()));
        setOpen(true);
    }, []);

    const router = useRouter();
    const handleModalOpen = useCallback(open => {
        if(!open)
            router.push("/");
        setOpen(open);
    }, [open]);

    const searchParams = useSearchParams();
    useEffect(() => {
        const directory = searchParams.get("open");
        if(directory)
            openModal(directory);
        else
            setOpen(false);
    }, [searchParams.get("open")]);

    const {fadeInactive, fadeIn, fadeActive} = useFadeAnimation();

    const projects = useRef({});
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        (async () => {
            projects.current = await fetch("./projects.json").then(response => response.json());
            setIsClient(true);
        })();
    }, []);

    const {classes} = useStyles();
    return (isClient &&
        <Effect start={show} inactive={fadeInactive} begin={fadeIn} active={fadeActive}>
            <section className={classes.projects}>
                <div>
                    <Heading className={classes.flavorText}>Everything I've worked on</Heading>
                    <Title className={classes.headline}>Project List</Title>
                </div>
                <Table className={classes.list} headers={projects.current.columns}>
                    {projects.current.rows.map((row, index) => (
                        row.display?
                            <Row key={`row-${index}`}>
                                <Label>{row.completionDate}</Label>
                                <Label className={classes.openModal} onClick={() => router.push(`?open=${row.directory}`)}>{row.name}</Label>
                                <Label>{row.madeFor}</Label>
                                <div className={classes.technologies}>{row.technologiesUsed.map((tech, index) => <Chip key={tech}>{tech}</Chip>)}</div>
                                <div className={classes.links}>{Object.entries(row.links).map(([name, link]) => <IconButton key={name} appearance="text" icon={name} iconClass="kalvin-icons" onClick={() => setTimeout(() => window.open(link, "_blank"), 300)} />)}</div>
                            </Row>
                            :
                            ""
                    ))}
                </Table>
                <Modal className={classes.modal} elevation="highest" open={open} setOpen={handleModalOpen}>
                    <Remark>{markdown}</Remark>
                </Modal>
            </section>
        </Effect>
    );
}