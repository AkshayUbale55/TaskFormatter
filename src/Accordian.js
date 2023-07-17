import { Fragment, useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import Buttons1 from "./Content/Button1";
import Buttons2 from "./Content/Button2";
import Buttons3 from "./Content/Button3";
import { ArrowCircleDown, ArrowDropDownSharp } from "@mui/icons-material";

function Icon({ id, open }) {
    return (
        <>
            <ArrowDropDownSharp className={`${id === open ? "rotate-180" : ""
                } h-5 w-5 transition-transform`} />
        </>
    );
}

const Accordian = () => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Fragment>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}>
                    What is Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                    <Buttons1 /> <Buttons2 /> <Buttons3 />
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    How to use Material Tailwind?
                </AccordionHeader>
                <AccordionBody>

                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    What can I do with Material Tailwind?
                </AccordionHeader>
                <AccordionBody>
                    
                </AccordionBody>
            </Accordion>
        </Fragment>
    );
}

export default Accordian