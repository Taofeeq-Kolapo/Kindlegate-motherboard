"use client";

import React from "react";
import { TbX } from "react-icons/tb";
import { Btn1 } from "./Btn1";

const GeneralModal = ({ close, handleClose, content }) => {
    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-[500] modal-overlay w-full overflow-y-scroll`}
        >
            <div
                onClick={handleClose}
                className={`modal backdrop-blur-sm fixed inset-0 flex items-center justify-center`}
            >
                <div
                    className={`modal-content bg-white  w-[40%] rounded-xl overflow-y-auto transform transition-transform duration-300 ease-in-out bounce`}
                >
                    <div className="flex p-6 items-center justify-end">
                        {/* <span
                            onClick={close}
                            className="text-xl cursor-pointer text-[var(--text-color)]"
                        >
                            <button className="w-[20px] h-[20px] bg-[#FCEE21] rounded-md">
                                <TbX />
                            </button>
                        </span> */}
                    </div>
                    <div className="px-6 pb-6 h-[20vh]  overflow-y-auto flex flex-col items-center">
                        <p className="font-bold text-black text-[32px]">Message Sent</p>
                        {content}
                        {/* <button>Go back to Home</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GeneralModal;
