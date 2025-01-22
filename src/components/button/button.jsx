import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[24px]",
};
const variants = {
    fill: {
        primary: "bg-primary text-white",
    },
    outline: {
        low_contrast: "border-low_contrast border border-solid text-low_contrast",
        medium_contrast: "border-medium_contrast border-[0.5px] border-solid text-low_contrast",
    },
};
const sizes = {
    xs: "h-[3.00rem] px-[2.13rem] text-[0.88rem]",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "fill",
    size = "xs",
    color = "primary",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center text-center cursor-pointer whitespace-nowrap font-neumontreal text-[0.88rem] ${
                shape && shapes[shape]
            } ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["fill", "outline"]),
    color: PropTypes.oneOf(["primary", "low_contrast", "medium_contrast"]),
};

export { Button };
