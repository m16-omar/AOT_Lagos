import { Helmet } from "react-helmet";
import {Text, Button, Img, CheckBox, Input, Heading } from "../../components";
import React from "react";

export default function LoginPaage() {
    return (
        <>
        <Helmet>
            <title>AOT</title>
            <meta name="description" content="Web site created using create-react-app" />
        </Helmet>
        <div className="relative h-[64.63rem] w-full content-end bg-background_n md:h-auto">
            <Img src="images/img_group_22.png" alt="Image" className="mx-auto h-[9.25rem] w-full flex-1 object-cover" />
            <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-center md:relative md:flex-col">
                <div className="h-[64.63rem] w-full bg-[url(/public/image/img_group_67.png)] bg-cover bg-no-repeat py-[6.75rem] md:h-auto md:p-[1.25rem]">
                <div className="mt-[2.63]">
                </div>
                </div>
            </div>
        </div>
        </>
    )
}