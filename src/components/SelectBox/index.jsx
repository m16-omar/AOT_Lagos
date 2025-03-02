import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px]",
};

const sizes = {
    xs: "h-[1.38rem] px-[0.75rem] text-[1.13rem]",
};

const SelectBox = React.forwardRef(
    (
        {
            children,
            className = "",
            options = [],
            isSeachable = false,
            isMulti = false,
            indicator,
            shape,

            size = "xs",
            ...restProps
        },
        ref,
    ) => {
        return (
            <>
            <Select ref={ref} options={options} className={`${className} flex ${shape && shapes[shape]} $ {size && sizes[size]}`} isSearchable={isSeachable} isMulti={isMulti} components={{IndicatorSeparator: () => null,
                ...(indicator && { DropdownIndicator: () => indicator }),
            }}
            styles={{indicatorsContainer: (provided) => ({
                ...provided,
                padding: undefined,
                flexShrink: undefined,
                width: "max-content", "& > div": {padding: 0},
            }),
            container: (provided) => ({
                ...provided,
                zIndex: 0,
                alignItems: "center",
            }),
            control: (provided) => ({
                ...provided,
                backgroundColor: "transparent",
                border: "0 !important",
                boxShadow: "none !important",
                minHeight: "auto",
                width: "100%",
                flexWrap: undefined,
                "&:hover": {
                    border: "0 !important",
                },
            }),
            input: (provided) => ({
                ...provided,
                color: "inherit",
            }),
            option: (provided, state) => ({
                ...provided,
                display: "flex",
                minWidth: "max-content",
                width: "100%",
                backgroundColor: state.isSelected ? "#8a2be2" : "transparent", 
                color: state.isSelected ? "#ffffff" : "inherit",
                "&:hover": {
                    backgroundColor: "#8a2be2",
                    color: "#ffffff",
                },
            }),
            singleValue: (provided) => ({
                ...provided,
                display: "flex",
                marginLeft: undefined,
                marginRight: undefined,
            }),
            valueContainer: (provided) => ({
                ...provided,
                padding: 0,
                display: "flex",
                flexWrap: undefined,
            }),
            placeholder: (provided) => ({
                ...provided,
                margin: 0,
            }),
            menuPortal: (base) => ({...base, zIndex: 999999 }),
            menu: (base) => ({...base, minWidth: "max-content", width: "max-content" }),
            }}
            menuPortalTarget={document.body}
            closeMenuOnScroll={(event)=> {
                return event.target.id === "scrollContainer";
            }}
            {...restProps}
            />
            {children}
            </>
        );
    },
);

SelectBox.propTypes = {
    className: PropTypes.string,
    option: PropTypes.array,
    isSeachable: PropTypes.bool,
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    indicator: PropTypes.node,
    shape: PropTypes.oneOf(["square"]),
    size: PropTypes.oneOf([xs]),
};

export { SelectBox };