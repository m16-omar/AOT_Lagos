import React, { Children } from "react";

const size = {
    heading: "text-[2.00rem] font-semibold md:text-[1.88rem] sm:text-[1.69rem]",
    headingxs: "text-[0.63rem] font-semibold",
    headings: "text-[1.31rem] font-semibold sm:text-[1.06rem]",
};

const heading = ({ children, className = "", size = "heading", as, ...restProps }) => {
    const Component = as || "h6";

    return (
        <Component className={`text-primary font-poppins ${className} &{sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { heading };