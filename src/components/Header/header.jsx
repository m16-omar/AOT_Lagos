import MegaMenu1 from "../MegaMenu1";
import { Button, SelectBox, Img, Text } from "./..";
import React from "react";

const dropDownOptions = [
    { label: "Options1", value: "options1" },
    { label: "Options2", value: "options2" },
    { label: "Options3", value: "options3" },
];

export default function Header({ ...props }) {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <header {...props} className={`${props.className} flex md:flex-col justify-between items-center ml-[8.25rem] mr-[6.50rem] gap-[1.25rem] md:mx-0 relative`}
        >
        <Img src="images/img_header_logo.png" alt="Headerlogo" className="h-[2.50rem] w-[5.25rem] object-contain" />
        <div className="flex w-[70%] items-center justify-between gap-[1.25] md:w-full md:flex-col">
            <div className="head_border flex rounded-[22px] bg-gradient p-[0.50rem]">
                <ul className="flex gap-[1.88rem] sm:flex-col">
                    <li>
                        <a href="#">
                            <Text size="body_regular" as="p" className="text-[1.13rem] font-normal !text-white">
                                Home
                            </Text>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <Text size="body_regular" as="p" className="text-[1.13rem] font-normal !text-white">
                                About
                            </Text>
                        </a>
                    </li>
                    <li onMouseLeave={() => {
                        setMenuOpen(false);
                    }}
                    onMouseEnter={() => {
                        setMenuOpen
                    }}
                    >
                        <div className="flex cursor-pointer items-center">
                            <Text size="body_regular" as="p" className="text-[1.13rem] font-normal !text-white">
                                Services
                            </Text>
                        </div>      
                    </li>
                </ul>
            </div>
        </div>
        </header>
    )
}