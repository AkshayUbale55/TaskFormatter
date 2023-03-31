import React from 'react'
import { useState } from 'react';
import {AssemblerVeevaIB,AssemblerVeevaCR,AssemblerSfmcIB,AssemblerSfmcCR} from "./Data"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

const Buttons3 = (props) => {
    const [dropDown, setDropDown] = useState(false);
    const [text1, setText1] = useState(AssemblerVeevaIB)
    const [text2, setText2] = useState(AssemblerVeevaCR)
    const [text3, setText3] = useState(AssemblerSfmcIB)
    const [text4, setText4] = useState(AssemblerSfmcCR)

    const copyAssemblerVeevaIB = async () => {
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

    const copyAssemblerVeevaCR = async () => {
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
    
    const copyAssemblerSfmcIB = async () => {
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
    const copyAssemblerSfmcCR = async () => {
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
                style={{width:"280px", marginLeft:"60px"}}
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
                                className="fixed left-[14rem] bg-white shadow-lg border-2 top-[5.5rem]  py-2 rounded-md px-4 w-auto z-30"
                            >
                                <ul className="flex-col justify-center items-center">
                                    <li className="flex py-2 hover:text-violet-400 text-black text-md items-center font-medium border-b-2" onClick={copyAssemblerVeevaIB}>
                                        {props.IB} <ContentCopyRoundedIcon className='mx-2'/>  
                                    </li>
                                    <li className="flex py-2 hover:text-violet-400 text-black text-md items-center font-medium border-b-2" onClick={copyAssemblerVeevaCR}>
                                        {props.IB1} <ContentCopyRoundedIcon className='mx-2'/>  
                                    </li>
                                    <li
                                        className="flex py-2 hover:text-violet-400 text-black text-md items-center font-medium border-b-2" onClick={copyAssemblerSfmcIB}
                                    >
                                        {props.CR} <ContentCopyRoundedIcon className='mx-2'/>  
                                    </li>
                                    <li
                                        className="flex py-2 hover:text-violet-400 text-black text-md items-center font-medium" onClick={copyAssemblerSfmcCR}
                                    >
                                        {props.CR1} <ContentCopyRoundedIcon className='mx-2'/>  
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

export default Buttons3;