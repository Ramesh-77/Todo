import { useState } from "react";
import clsx from "clsx";

const iconBaseStyles = `absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 pointer-events-none`;
const inputBaseStyle = `peer border border-gray-300 rounded-md px-3 py-3 text-sm text-gray-900
          placeholder-transparent transition-all duration-200 ease-in-out
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500`
const labelBaseStyles = `absolute text-gray-500 text-sm bg-white px-1 transition-all duration-200 ease-in-out pointer-events-none`

const FloatingInput = ({
  label,
  icon,
  id,
  type,
  value,
  onChange,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || (value?.length > 0);

  return (
    <div className="relative mb-6 ml-10">
      {/* Icon */}
      {icon && (
        <span className={iconBaseStyles}>
          {icon}
        </span>
      )}

      {/* Input */}
      <input
        id={id}
        type={type}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={onChange}
        placeholder={label}
        className={clsx(
          // "w-full",
          inputBaseStyle,
          icon && "pl-10"
        )}
        {...props}
      />

      {/* Floating Label */}
      <label
        htmlFor={id}
        className={clsx(
          labelBaseStyles,
          {
            "left-3": !icon,
            "left-10": icon,
            "top-1 -translate-y-1/2 text-xs": isActive, // Floating state
            "top-1/2 -translate-y-1/2": !isActive       // Centered state
          }
        )}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;

