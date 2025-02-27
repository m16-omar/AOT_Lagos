import { Img } from "./..";
import React from "react";

export default function MediaGallary({
    vectorImage = "images/img_vector_4.png",
    movieVideoImage = "images/img_movie_video_camera_80x80.png",
    ...props
}) {
    return (
        <div {...props} className={`{props.className} w-full relative`}>
            <Img src={vectorImage} alt="Vectorfour" className="absolute bottom-[0.00rem] right-[0.00rem] m-auto h-[11.25rem] w-[84] rounded-[12px] object-contain" />
            <div className="absolute left-[0.00rem] top-[0.00rem] m-auto flex h-[7.88rem] items-center rounded-[12px] bg-[url(/public/images/img_group_42.svg)] bg-cover bg-no-repeat p-[1.38rem] sm:p-[1.25rem]">
            <Img src={movieVideoImage} alt="Movievideo" className="h-[5.00rem] w-[90%] object-contain"/>
            </div>
        </div>
    );
}