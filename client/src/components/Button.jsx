import clsx from "clsx"

// define sizes 
const sizes = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
}

// define variants
const variants = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
}
const defaultStyles = 'rounded rounded-xs'

export const Button = ({size, variant, text, className, startIcon, endIcon, ...props}) => {
    // define button styles based on size and variant using clsx package
    const buttonStyles = clsx(
        defaultStyles, 
        sizes[size],
        variants[variant],
        className
    )
    return (
        // <button size, Text, startIcon, endIcon, variant></button>
        <button className={buttonStyles}>
            {startIcon && <span className="mr-2 inline-block">{startIcon}</span>}
            {text}
            {endIcon && <span className="ml-2">{endIcon}</span>}
        </button>
    )
}

