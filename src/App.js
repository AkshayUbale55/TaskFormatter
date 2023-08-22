import "./App.css";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ArrowDropDownSharp } from "@mui/icons-material";
import Buttons1 from "./Content/Button1";
import Buttons2 from "./Content/Button2";
import Buttons3 from "./Content/Button3";
import Buttons4 from "./Content/Button4";
import Buttons5 from "./Content/Button5";
import Buttons6 from "./Content/Button6";
import Buttons7 from "./Content/Button7";
import Buttons8 from "./Content/Button8";
import Buttons9 from "./Content/Button9";
import Buttons10 from "./Content/Button10";
import Buttons11 from "./Content/Button11";
import Buttons12 from "./Content/Button12";
import Buttons13 from "./Content/Button13";
import Buttons14 from "./Content/Button14";

function Icon({ id, open }) {
  return (
    <>
      <ArrowDropDownSharp className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`} />
    </>
  );
}



function App() {

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 2 },
  };

  return (
    <>
      <Fragment>
        <div className="App bg-[#EAFDFC] p-5">

          <Accordion open={open === 1} icon={<Icon id={1} open={open} animate={customAnimation} />} className="border-2 border-[#008876] px-4 mt-1 rounded-lg pb-3">
            <AccordionHeader onClick={() => handleOpen(1)} className={`border-b-0 transition-colors ${open === 1 ? "text-[#008876] hover:!text-[#008876]" : ""}`} >
              <div className="text-center mt-2 font-semibold text-md p-0.5">
                WD to QA Assigning Format Task Template
              </div>
            </AccordionHeader>
            <AccordionBody>

              {open === 1 && <div className="flex flex-col m-1 my-2 p-3 max-w-full justify-center items-center bg-slate-100 rounded shadow">
                <div className="flex flex-row justify-center items-center space-x-2 p-2">
                  <Buttons1
                    IB="VEEVA IB"
                    CR="VEEVA CR"
                    Coversion="VEEVA to SFMC"
                    name="VEEVA Email"
                  />
                  <Buttons2
                    IB="SFMC IB"
                    CR="SFMC CR"
                    Coversion="SFMC to VEEVA"
                    name="SFMC Email"
                  />
                  <Buttons3
                    VeevaIB="Veeva IB"
                    VeevaCR="Veeva CR"
                    SfmcIB="SFMC IB"
                    SfmcCR="SFMC CR"
                    name="Assembler"
                  />
                </div>
                <div className="flex flex-row justify-center space-x-2 items-center p-2">
                  <Buttons4 IB="iPad IB" CR="iPad CR" name="iPad" />
                  <Buttons5
                    IB1="Website IB"
                    IB2="Website Update IB"
                    CR="Website CR"
                    siteValidation="Live site validation"
                    name="Website"
                  />
                  <Buttons6 IB="Outlook IB" CR="Outlook CR" name="Outlook" />
                </div>
              </div>}
            </AccordionBody>
          </Accordion>

          {/*  */}

          <Accordion open={open === 2} icon={<Icon id={2} open={open} animate={customAnimation} />} className="border-2 border-[#008876] px-4 mt-2 rounded-lg pb-2">
            <AccordionHeader onClick={() => handleOpen(2)} className={`border-b-0 transition-colors ${open === 2 ? "text-[#008876] hover:!text-[#008876]" : ""}`}>
              <div className="text-center mt-2 font-semibold text-md p-1">
                Veeva/Sfmc Token & Upload Format
              </div>
            </AccordionHeader>
            <AccordionBody>
              {open === 2 && <div className="flex flex-col m-1 my-2 p-3 max-w-full justify-center items-center rounded bg-slate-100 shadow overflow-auto">
                <div className="flex flex-row justify-center items-center space-x-2 p-2">
                  <Buttons13
                    VeevaToken="Veeva token"
                    SfmcToken="SFMC token"
                    MsdTubeLinks="MSD Tube Links"
                    CloudPageLinks="Cloud page Links"
                    name="Veeva & Sfmc Tokens format"
                  />
                  <Buttons10 Uploadtask="PDF Upload" name="Veeva PDF upload format" />
                </div>
                <div className="flex flex-row justify-center items-center space-x-2 p-2">
                  <Buttons11
                    Uploadtask="Veeva build Upload"
                    ReUploadtask="Veeva build Reupload"
                    name="Upload format for VeevaVault"
                  />
                  <Buttons12
                    Uploadtask="SFMC build Upload"
                    ReUploadtask="SFMC build Reupload"
                    name="Upload format for SFMC "
                  />
                </div>
              </div>}
            </AccordionBody>
          </Accordion>
          {/*  */}
          <Accordion open={open === 3} icon={<Icon id={3} open={open} animate={customAnimation} />} className="border-2 border-[#008876] px-4 mt-2 rounded-lg pb-2">
            <AccordionHeader onClick={() => handleOpen(3)} className={`border-b-0 transition-colors ${open === 3 ? "text-[#008876] hover:!text-[#008876]" : ""}`}>
            <div className="text-center font-semibold text-md mt-1 p-1.5">
              Other Task Template
              </div>
            </AccordionHeader>
            <AccordionBody>
              {open === 3 && <div className="flex flex-col m-1 my-2 p-3 max-w-full justify-center items-center rounded bg-slate-100 shadow overflow-auto">
                <div className="flex flex-row justify-center space-x-2 p-2 items-center">
                  <Buttons9
                    Uploadtask="SFMC Image Upload"
                    ReUploadtask="SFMC Image Reupload"
                    name="SFMC Image Upload Format"
                  />
                  <Buttons8
                    Uploadtask="S3 Image Upload"
                    ReUploadtask="S3 Image Reupload"
                    name="S3 Img Upload format for Veeva"
                  />
                  
                </div>
                <div className="flex flex-row justify-center items-center space-x-2 p-2">

                    <Buttons7 CPtask="CP Assigning Task" name="Img cropping format to cp" />
                    <Buttons14
                      Veevabuild="Veeva Build"
                      Sfmcbuild="SFMC Build"
                      PreDrtbuild="PreDRT Build"
                      name="Build folder naming convention"
                    />
                  </div>
              </div>}
            </AccordionBody>
          </Accordion>

          {/* <div className="p-10"></div> */}
        </div>
      </Fragment>
    </>

  );
}

export default App;
