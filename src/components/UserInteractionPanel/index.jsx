import { Img, Text } from "./..";
import React from "react";

export default function UserInteractionPanel({
    joinText = "JOIN",
    connectNowText = "Connect Now",
    connectNowImage = "images/img_arrow_primary_1.png",
    jumpIntoText = "Jump into exciting events.",
    searchImage = "images/img_search_primary.svg",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex flex-col justify-center w-[32%] md:w-full gap-[8.13rem] px-[2.50rem] py-[4.00rem] md:gap-[6.06rem] md:py-[1.25rem] sm:gap-[4.06rem] sm:p-[1.25rem] bg-high_contrast rounded-[64px]`}
        >
            <div className="flex flex-col gap-[3.00rem] self-stretch">
                <div className="flex">
                    <Text size="body_regular" as="p" className="text-[1.13rem] font-normal !text-low_constrast">
                        {joinText}
                    </Text>
                </div>
                <div className="flex flex-col gap-[1.00rem">
                    <div className="flex items-start gap-[0.56rem]">
                        <Text size="sub_heading" as="p" className="self-center text-[1.50rem] font-normal !text-primary">
                            {connectNowText}
                        </Text>
                        <Img src={connectNowImage} alt="Connect Now" className="h-[1.00rem] object-cover"/>
                    </div>
                    <div className="flex">
                        <Text as="p" className="text-[0.88rem] font-normal !text-low_constrast">
                            {jumpIntoText}
                        </Text>
                    </div>
                </div>
            </div>
            <Img src={searchImage} alt="Search" className="md-[0.88rem} h-[1.50rem]"/>
        </div>
    );
}