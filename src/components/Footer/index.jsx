import { Img, Text, Heading, Input } from "./..";
import React from "react";

export default function Footer({ ...props }){
    return (
        <Footer {...props} className={`${props.className} flex flex-col items-center`}>
            <div className="container-xs flex flex-col items-center px-[3.50rem] md:px-[1.25rem]">
                <div className="flex w-[80%] items-start justify-between gap-[1.25rem] md:w-full md:flex-col">
                    <div className="flex w-[30%] flex-col items-start gap-[0.75rem] self-center md:w-full">
                        <Text size="sub_heading" as="p" className="text-[1.50rem] font-normal !text-primary md:text-[1.38rem]">
                            Receive update
                        </Text>
                        <div className="flex items-center gap-[0.50rem] self-stretch">
                            <Text as="p" className="text-[0.88rem] font-normal !text-low_constrast">
                                Unsubscribe at any time
                            </Text>
                            <div className="flex">
                                <a href="">
                                    <div className="flex gap-[0.50rem]">
                                        <Text as="p" className="text-[0.88rem] font-normal !text-low_constrast">
                                            Privacy policy
                                        </Text>
                                        <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[1.00rem]"/>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <Input shape="round" name="email" placeholder={`Your email`} suffix={
                        <div className="flex h-[0.63rem] w-[0.75rem] items-center justify-center">
                            <Img src="images/img_arrowleft_primary.png" alt="Arrow Left" className="h-[0.75rem] w-[0.88rem] object-contain" />
                        </div>
                        } 
                        className="w-[44%] gap-[1.00rem] rounded-[24px] !border-[0.5px] px-[1.00rem] !text-primary md:w-full" />
                </div>
            </div>
            <div className="mx-auto mt-[9.88rem] flex w-full max-w-[73.00rem] items-center justify-between gap-[1.25rem] md:flex-col md:px-[1.25rem]">
                <div className="flex w-[28%] items-center justify-between gap-[1.25rem] md:w-full">
                    <Img src="images/img_vector.png" alt="Vector" className="h-[10.00rem] w-[50%] object-contain" />
                    <Heading siz="headings" as="h5" className="text-[1.31rem] font-semibold">
                        Unwind HUB
                    </Heading>
                </div>
                <div className="flex w-[62%] items-start justify-between gap-[1,25rem] md:w-full md:flex-col">
                    <ul className="flex w-[18%] flex-col items-start gap-[1.00rem] self-center md:w-full">
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        About
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]"/>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Services 
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]"/>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Pricing
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]"/>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Solution
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]"/>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        FAQ
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]"/>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul className="flex w-[24%] flex-col items-start gap-[1.00rem] md:w-full">
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Book Club
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]"/>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Movie Club
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]"/>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Karaoke Club{" "}
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]"/>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Gaming Lounge{" "}
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]"/>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul className="flex w-[24%] flex-col items-start gap-[1.00rem] md:w-full">
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Earn
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Wallet
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        App & Services
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]" />
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul className="flex w-[22%] flex-col items-start gap-[1.00rem] md:w-full">
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Community
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Contributors
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Events
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Newsletters
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]" />
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul className="flex flex-col items-start gap-[1.00rem]">
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Resources
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]" />
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="flex items-start gap-[0.50rem]">
                                    <Text as="p" className="self-center text-[0.88rem] font-normal !text-low_constrast">
                                        Blog
                                    </Text>
                                    <Img src="images/img_arrow_left.svg" alt="Arrowleft" className="h-[0.50rem]" />
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mt-[3.00rem] flex gap-[1.00rem] self-end">
                <Img src="images/img_linkedin_primary.svg" alt="Linkedin" className="h-[1.50rem]" />
                <Img src="images/img_x_primary_2.svg" alt="X" className="h-[1.50rem]" />
            </div>
        </Footer>
    );
}