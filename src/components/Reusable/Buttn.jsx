// import React from "react";
// import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
// import { involved } from "./NavData";
// import Link from "next/link";
// import { MdKeyboardDoubleArrowDown } from "react-icons/md";
// import { FaCaretDown } from "react-icons/fa6";

// export default function Button2() {
//     return (
//         <Dropdown className="tab">
//             <DropdownTrigger>
//                 <Button className="tab flex flex-row gap-1 items-center "
//                 >
//                     <p className="tab">GET INVOLVED</p>
//                     <FaCaretDown className="text-xl"/>

//                 </Button>
//             </DropdownTrigger>
//             <DropdownMenu aria-label="Static Actions" className="bg-transparent border-2 border-black w-[150px] p-3 rounded-2xl bg-black  justify-center flex items-center">
//                 <DropdownItem className="text-xl" key="new">
//                     {
//                         <div className="lg:flex flex-col hidden gap-3 w-full text-white">
//                             {
//                                 involved.map((d, i) => {
//                                     return (
//                                         <div key={i}>
//                                             <Link className="hover:bg-[#14BDE3] hover:rounded-lg font-semibold hover:w-full w-full p-2" href={d.link}>{d.title}</Link>
//                                         </div>)
//                                 })
//                             }
//                         </div>
//                     }
//                 </DropdownItem>

//             </DropdownMenu>
//         </Dropdown>
//     );
// }
import React, { useState, useRef, useEffect } from "react";
import { deskinvolved } from "./NavData";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";

export default function OurTribebtn() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const triggerRef = useRef(null);

    // Function to handle mouse enter
    const handleMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    // Function to handle mouse leave
    const handleMouseLeave = () => {
        setIsDropdownOpen(false);
    };

    // Close dropdown when clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                !triggerRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative">
            <div
                ref={triggerRef}
                onMouseEnter={handleMouseEnter}
                className="tab flex flex-row gap-2 items-center cursor-pointer"
                onClick={handleMouseLeave}
            >
                <Link href={"/involved"} className="tab flex flex-row gap-1 items-center">
                    <p className="tab">GET INVOLVED</p>
                    <FaCaretDown className="text-xl" />
                </Link>
            </div>
            {
                isDropdownOpen && (
                    <div
                        ref={dropdownRef}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={handleMouseLeave}
                        className="absolute flex flex-col gap-3 bg-white p-3 border-[1px] border-[#14BDE3] w-[180px] mt-2 "
                    >
                        {deskinvolved.map((d, i) => (
                            <Link
                                key={i}
                                href={d.link}
                                className="hover:bg-gray-200 font-bold w-full p-2 text-[#14BDE3] text-[16px]"
                            >
                                {d.title}
                            </Link>
                        ))}
                    </div>
                )
            }
        </div >
    );
}
