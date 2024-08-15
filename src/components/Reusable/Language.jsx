import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { involved } from "./NavData";
import Link from "next/link";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa6";

export default function Language() {
    return (
        <Dropdown className="tab">
            <DropdownTrigger>
                <Button className="tab flex text-[14px] flex-row gap-1 items-center "
                >
                    <p className="tab uppercase">Language</p>
                </Button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions" className="bg-white border-2 border-black w-[120px] p-3 rounded-2xl justify-center flex items-center">
                <DropdownItem className="text-xl" key="new">
                    <div className="text-black text-[16px]" name="" id="">
                        <p value="">English</p>
                        <p value="">French</p>
                        <p value="">Spanish</p>
                        <p value="">Arabic</p>
                        <p value="">Swahili</p>
                    </div>
                </DropdownItem>

            </DropdownMenu>
        </Dropdown>
    );
}
