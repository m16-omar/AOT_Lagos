import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[24px]",
};

const variants = {
    outline: {
        primary: "border-primary border-[0.5px] border-solid text-low_contrast",
    },
};

const sizes = {
    xs: "h-[3.00rem] px-[0.88rem] text-[0.88rem]",
};

const Input = React.forwardRef(
(
    {  
    className = "",  
    name = "",  
    placeholder = "",  
    type = "text",  
    label = "",  
    prefix,  
    suffix,  
    onChange,  
    shape,  
    variant = "outline",  
    size = "xs",  
    color = "",  
    ...restProps  
}, 
ref) => {  
    return (  
        <label  
            className={`${className} flex items-center justify-center cursor-text font-neuemontreal text-[0.88rem] border-primary border-[0.5px] border-solid rounded-[24px]  
            ${shape ? shapes[shape] : ""}  
            ${variant ? (variants[variant]?.[color] || variants[variant]) : ""}  
            ${size ? sizes[size] : ""}`}  
        >  
            {label && <span>{label}</span>}  
            {prefix && <span>{prefix}</span>}  
            <input  
                ref={ref}  
                type={type}  
                name={name}  
                placeholder={placeholder}  
                onChange={onChange}  
                {...restProps}  
                className="bg-transparent outline-none flex-1"  
            />  
            {suffix && <span>{suffix}</span>}  
        </label>  
    );  
});  

Input.propTypes = {  
    className: PropTypes.string,  
    name: PropTypes.string,  
    placeholder: PropTypes.string,  
    type: PropTypes.string,  
    label: PropTypes.string,  
    prefix: PropTypes.node,  
    suffix: PropTypes.node,  
    shape: PropTypes.oneOf(["round"]),  
    size: PropTypes.oneOf(["xs"]),  
    variant: PropTypes.oneOf(["outline"]),  
    color: PropTypes.oneOf(["primary"]),  
};  

export { Input };  
