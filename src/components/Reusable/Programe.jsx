import React, { useState, useRef, useEffect } from "react";
import { deskprograms, desktribes, tribes } from "./NavData";
import Link from "next/link";

export default function ProgramsBtn() {
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
        dropdownRef.current 
        // !dropdownRef.current.contains(event.target) &&
        // !triggerRef.current.contains(event.target)
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
      {/* DropdownTrigger button */}
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        className="tab flex flex-row gap-2 items-center cursor-pointer"
        // onClick={handleMouseLeave}
      >
        <Link href={"/programs"} className="tab">PROGRAMS</Link>
      </div>

      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          // onClick={handleMouseLeave}
          className="absolute flex flex-col gap-3 bg-white p-3 border-[1px] border-[#14BDE3] w-[230px] mt-2 "
        >
          {deskprograms.map((d, i) => (
            <Link
              key={i}
              href={d.link}
              className="hover:bg-gray-200 font-bold w-full p-2 text-[#14BDE3] text-[16px]"
            >
              {d.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
