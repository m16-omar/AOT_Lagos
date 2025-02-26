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
                            <Img src="images/img_arrow_down_white.svg" alt="Arrowdown" className="h-[0.75rem] w-[1.50rem]" />
                        </div>
                        {menuOpen ? <MegaMenu1 /> : null}
                        </li>
                        <li>
                            <a href="#"> 
                            <Text size="body_regular" as="p" className="tex-[1.13rem] font-normal !text-white">
                                Pricing 
                            </Text> 
                            </a>
                        </li>  
                        <li>
                            <a href="#">
                                <Text size="body_regular" as="p" className="text-[1.13rem] font-normal !text-white">
                                    Solution
                                </Text>
                            </a>
                        </li>   
                </ul>
            </div>
            <div className="flex w-[34%] items-center justify-center md:w-full">
                <a href="#">
                    <Img src="images/img_globe_white.svg" alt="Globe" className="h-[1.25rem]" />
                </a>
                <SelectBox shape="square" name="eng" placeholder={`Eng`} options={dropDownOptions} className="ml-[0.50remm] font-neuemontreal text-white"
                />
                <Button shape="round" className="ml-[1.00rem] min-w-[12.50rem] rounded-[24px] border-[0.1px] border-solid border-white px-[2.13rem] sm:px-[1.25rem]" 
                >
                    Join Now 
                </Button>
            </div>
        </div>
    </header>
    );
}

// import React from "react";

// const dropDownOptions = [
//     { label: "English", value: "eng" },
//     { label: "French", value: "fr" },
//     { label: "Spanish", value: "sp" },
// ];

// export default function Header({ ...props }) {
//     const [menuOpen, setMenuOpen] = React.useState(false);

//     return (
//         <header {...props} className="flex md:flex-col justify-between items-center px-8 py-4 bg-gray-800 text-white">
//             {/* Logo */}
//             <img src="/images/img_header_logo.png" alt="Header Logo" className="h-10 w-auto" />

//             {/* Navigation Menu */}
//             <nav className="flex gap-8">
//                 <a href="#" className="hover:text-gray-300">Home</a>
//                 <a href="#" className="hover:text-gray-300">About</a>
                
//                 {/* Services Dropdown */}
//                 <div className="relative" onMouseEnter={() => setMenuOpen(true)} onMouseLeave={() => setMenuOpen(false)}>
//                     <span className="cursor-pointer flex items-center">
//                         Services
//                         <img src="/images/img_arrow_down_white.svg" alt="Arrow Down" className="h-3 ml-2" />
//                     </span>
//                     {menuOpen && (
//                         <div className="absolute top-full left-0 bg-gray-700 p-2 mt-1 rounded">
//                             <a href="#" className="block px-4 py-2 hover:bg-gray-600">Service 1</a>
//                             <a href="#" className="block px-4 py-2 hover:bg-gray-600">Service 2</a>
//                         </div>
//                     )}
//                 </div>

//                 <a href="#" className="hover:text-gray-300">Pricing</a>
//                 <a href="#" className="hover:text-gray-300">Solution</a>
//             </nav>

//             {/* Right Section */}
//             <div className="flex items-center">
//                 <img src="/images/img_globe_white.svg" alt="Globe" className="h-5" />
                
//                 {/* Language Dropdown */}
//                 <select className="ml-2 bg-gray-800 border border-white text-white p-1 rounded">
//                     {dropDownOptions.map((option) => (
//                         <option key={option.value} value={option.value}>
//                             {option.label}
//                         </option>
//                     ))}
//                 </select>

//                 {/* Join Button */}
//                 <a href="#" className="ml-4 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-gray-800">
//                     Join Now
//                 </a>
//             </div>
//         </header>
//     );
// }
