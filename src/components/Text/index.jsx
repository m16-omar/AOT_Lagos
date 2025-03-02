import React, { Children } from "react";

const sizes = {
    s_body: "font-neuemontreal text-[0.88rem] font-normal",
    sub_heading: "font-neuemontreal text-[1.50rem] font-normal md:text-[1.38rem] sm:text-[1.25rem]",
    body_regular: "font-neuemontreal text-[1.13rem] font-normal sm:text-[0.94rem]",
    textxs: "text-[3.00rem] font-normal md:text-[2.75rem] sm:text-[2.50rem]",
    texts: "text-[4.00rem] font-normal md:text-[3.00rem]",
    textmd: "text-[5.00rem] font-normal md:text-[3.00rem]",
};

const Text = ({ children, className = "", as, size = "s_body", ...restProps }) => {
    const Component = as || "p";

    return(
        <Component className={`text-medium_constrast font-neuemontreal ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };