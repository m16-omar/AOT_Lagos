import { img, Text } from "./..";
import React from "react";

export default function CommunityConnectSection({
    connectText = "CONNECT",
    communityText = "Community",
    communityImage = "image/img_arrow_left_primary_1.png"
    descriptionText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. ",
    searchIcon = "images/img_search_primary.svg",
    ...props 
}) {
    return (
        <div {...props} className={`${props.className} flex flex-col justify-center w-[32%] md:w-full gap-[8.13rem] px-[2.50rem] py-[3.88rem] md:gap-[6.06rem] md:py-[1.25rem] sm:gap-[4.06rem] sm:p-[1.25rem] bg-high_contrast rounded-[64px]`}
        >
            <div className="flex flex-col gap-[3.00rem] self-stretch">
                <div className="flex">  
                    <Text size="body_regular" as="p" className="text-[1.13rem] font-normal !text-low_constrast">
                        {connectText}
                    </Text>  
                </div>
                <div className="flex flex-col gap-[1.00rem]">
                    <div className="flex items-start gap-[0.50rem]">
                        <Text size="sub_heading" as="p" className="self-end text-[1.50rem] font-normal !text-primary">
                            {communityText}
                        </Text>
                        <Img src={communityImage} alt="Community" className="h-[1.00rem] object-cover" />
                    </div>
                    <Text as="p" className="text-[0.88rem] font-normal leading-[1.00rem] !text-low_constrast">
                    {descriptionText}
                    </Text>
                </div> 
            </div>
            <Img scr={searchIcon} alt="Search" className="h-[1.50rem]" />
        </div>
    )
}