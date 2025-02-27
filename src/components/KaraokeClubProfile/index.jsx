import { Text, Img } from "./..";
import React from "react";

export default function KaraokeClubProfile({
    clubImage = "images/img_music_festival_80x80.png",
    clubName = "Karaoke Club",
    clubDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-start w-full gap-[1.50rem]`}>
            <div className="flex h-[7.88rem] items-center rounded-[12px] bg-[url(/public/images/img_group_43.svg)] bg-cover bg-no-repeat p-[1.38rem] sm:p-[1.25rem]">
              <Img src={clubImage} alt="Karaoke Club" className="h-[5.00rem] w-[5.00rem] object-contain" />
            </div>
            <Text size="sub_heading" as="p" className="text-[1.50rem] font-normal !text-primary">
                {clubName}
            </Text>
            <Text size="sub_heading" as="p" className="w-full text-[1.50rem] font-normal leading-[1.75rem] !text-low_constrast">
                {clubDescription}
            </Text>
        </div>
    );
}