import React from "react";
import PropTypes from "prop-types";

const variant = {
    primary: "checked: border-[3px]",
};
const sizes = {
    xs: "h-[1.38rem] w-[1.38rem]",
};

const CheckBox = React.forwardRef(
    (
    {
    className = "",
    name = "",
    label = "",
    id = "checkbox_id",
    onChange,
    variant = "primary",
    size = "xs",
    ...restProps
    },
) => {
    const handleChange = (e) => {
        if (onChange) onChange(e?.target?.checked);
    };

    return (
        <> 
        <div className={className + "flex items-center gap-[0.31rem] cursor-pointer"}>
            <input className={` ${(size && sizes[size]) || ""} &{(variant && variants[variant]) || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            onChange={handleChange}
            id={id}
            {...restProps} 
            />
            {!!label && <label htmlFor={id}>{label}</label>}
        </div>
        </>
    );
    },
);