import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { involved, tribes } from "./NavData";
import Link from "next/link";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export default function OurTribebtn() {
    return (
        <Dropdown className="tab">
            <DropdownTrigger>
                <Button className="tab flex flex-row gap-2 items-center "
                >
                    <p className="tab">OUR TRIBE</p>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="bg-transparent border-2 border-black w-[240px] p-3 rounded-2xl justify-center flex items-center">
                <DropdownItem className="text-xl" key="new">
                    {
                        <div className="lg:flex flex-col hidden gap-3 w-full text-black">
                            {
                                    tribes.map((d, i) => {
                                        return (
                                            <div key={i}>
                                                <Link className="hover:bg-[#14BDE3] hover:rounded-lg hover:w-full w-full p-2" href={d.link}>{d.title}</Link>
                                            </div>)
                                    })
                                }
                        </div>
                    }
                </DropdownItem>

            </DropdownMenu>
        </Dropdown>
    );
}
