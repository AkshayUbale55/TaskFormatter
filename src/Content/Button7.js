import React from 'react'
import { useState } from 'react';
import { ImageCropping } from "./Data"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ContentCopyRoundedIcon from '@mui/icons-material/ContentCopyRounded';

const Buttons7 = (props) => {
    const [dropDown, setDropDown] = useState(false);

    const [text1, setText1] = useState(ImageCropping);


    const copyImageCropping = async () => {
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
                            className="fixed bg-white shadow-lg border-2 top-[17.5rem]  py-2 rounded-md px-4 w-auto z-30"
                        >
                            <ul className="flex-col justify-center items-center">
                                <li className="flex py-2 hover:text-violet-400 text-black text-md items-center font-medium " onClick={copyImageCropping}>
                                  {props.CPtask} <ContentCopyRoundedIcon className='mx-2'/>  
                                </li>
                            </ul>
                        </div>}
                        <button className='flex justify-evenly m-auto text-center text-white bg-violet-400 border-0 p-2 focus:outline-none hover:bg-violet-500 rounded text-xs'
                        >
                            {props.name}
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Buttons7;