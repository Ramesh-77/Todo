import clsx from "clsx"

// define sizes 
const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-5 py-2 text-base',
    large: 'px-5 py-2 text-lg',
}

// define variants
const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
}
// const defaultStyles = 'rounded rounded-xs'
const baseStyles = "rounded text-center inline-flex items-center justify-center";
const startIconStyles = 'mr-2'
const endIconStyles = 'ml-2'

export const Button = ({ size, variant, text, className, startIcon, endIcon, ...props }) => {
    // define button styles based on size and variant using clsx package
    const buttonStyles = clsx(
        baseStyles,
        sizes[size],
        variants[variant],

    )
    // // for icon css

    return (
        // <button size, Text, startIcon, endIcon, variant></button>
        <button className={buttonStyles}{...props}>
            {startIcon && <span className={startIconStyles}>{startIcon}</span>}
            {text}
            {endIcon && <span className={endIconStyles}>{endIcon}</span>}
        </button>
    )
}

