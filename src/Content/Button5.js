import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {WebsiteIB,WebsiteUpdateIB,WebsiteCR,WebsiteLiveValidation} from "./Data"
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

const Buttons5 = (props) => {
    const [dropDown, setDropDown] = useState(false);
    const [text1, setText1] = useState(WebsiteIB)
    const [text2, setText2] = useState(WebsiteUpdateIB)
    const [text3, setText3] = useState(WebsiteCR)
    const [text4, setText4] = useState(WebsiteLiveValidation)

    const copyWebsiteIB = async () => {
        try {
            await navigator.clipboard.writeText(text1);
            // console.log('Text copied to clipboard');
            toast("Content Copied to clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "success",

            });
        } catch (err) {
            // console.error('Failed to copy text: ', err);
            toast("Failed to copy content to clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "error",

            });
        }
    }
    const copyWebsiteUpdateIB = async () => {
        try {
            await navigator.clipboard.writeText(text2);
            // console.log('Text copied to clipboard');
            toast("Content Copied to clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "success",

            });
        } catch (err) {
            // console.error('Failed to copy text: ', err);
            toast("Failed to copy content to clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "error",

            });
        }
    }

    const copyWebsiteCR = async () => {
        try {
            await navigator.clipboard.writeText(text3);
            // console.log('Text copied to clipboard');
            toast("Content Copied to clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "success",

            });
        } catch (err) {
            // console.error('Failed to copy text: ', err);
            toast("Failed to copy content to clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "error",

            });
        }
    }

    const copyWebsiteLiveValidation = async () => {
        try {
            await navigator.clipboard.writeText(text4);
            // console.log('Text copied to clipboard');
            toast("Content Copied to clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "success",

            });
        } catch (err) {
            // console.error('Failed to copy text: ', err);
            toast("Failed to copy content to clipboard", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                type: "error",

            });
        }
    }
    return (
        <div>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                style={{ width: "280px", marginLeft: "60px" }}
            />
            <div>
                <div className="flex m-auto items-center justify-between w-full">
                    <span
                        className="flex justify-evenly right-[24rem] top-3 cursor-pointer"
                        onMouseOver={() => {
                            setDropDown(true);
                        }}
                        onMouseLeave={() => {
                            setDropDown(false);
                        }}
                    >
                        {dropDown && <div
                            onMouseOver={() => {
                                setDropDown(true);
                            }}
                            onMouseLeave={() => {
                                setDropDown(false);
                            }}
                            className="fixed left-[6.5rem] bg-white shadow-lg border-2 top-[9rem]  py-2 rounded-md px-4 w-auto z-30"
                        >
                            <ul className="flex-col justify-center items-center">
                                <li className="flex py-2 hover:text-violet-400 text-black text-md items-center font-medium border-b-2"  onClick={copyWebsiteIB}>
                                    {props.IB1} <ContentCopyRoundedIcon className='mx-2'/>  
                                </li>
                                <li className="flex py-2 hover:text-violet-400 text-black text-md items-center font-medium border-b-2" onClick={copyWebsiteUpdateIB}>
                                    {props.IB2} <ContentCopyRoundedIcon className='mx-2'/>  
                                </li>
                                <li className="flex py-2 hover:text-violet-400 text-black text-md items-center font-medium border-b-2" onClick={copyWebsiteCR}>
                                    {props.CR} <ContentCopyRoundedIcon className='mx-2'/>  
                                </li>
                                <li className="flex py-2 hover:text-violet-400 text-black text-md items-center font-medium " onClick={copyWebsiteLiveValidation}>
                                    {props.siteValidation} <ContentCopyRoundedIcon className='mx-2'/>  
                                </li>
                            </ul>
                        </div>}
                        <button className='flex justify-evenly m-auto text-center text-white bg-violet-400 border-0 p-2 focus:outline-none hover:bg-violet-500 rounded text-xs w-20'>
                            {props.name}
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Buttons5;