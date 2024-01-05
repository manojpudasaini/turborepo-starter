import React from "react";
import { tv } from "tailwind-variants";
interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  type?: string;
  disabled?: boolean;
  id?: string;
  field?: any;
  error?: string;
}
const inputContainerVariants = tv({
  base: "ring-1 border-none ring-blue-400 w-full outline-none rounded-md h-10 p-3 focus:ring-blue-500 transition-all duration-300",
  variants: {
    color: {
      error: "ring-red-500 focus:ring-red-500",
    },
  },
});

function InputField({
  name,
  label,
  placeholder,
  value,
  type,
  disabled,
  id = label,
  field,
  onChange,
  error,
}: InputFieldProps) {
  let colorVariant: "error" | undefined;
  if (error) {
    colorVariant = "error";
  }
  return (
    <div>
      <div className="flex flex-col space-y-2">
        {label && (
          <label
            htmlFor={id}
            className="text-gray-700 font-semibold tracking-wide capitalize"
          >
            {label}
          </label>
        )}
        <input
          {...field}
          name={name}
          type={type}
          id={id}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          className={inputContainerVariants({
            color: colorVariant,
          })}
          onChange={(e) => {
            field ? field.onChange(e.target.value) : onChange && onChange(e);
          }}
        />
      </div>
      <div className="h-4">
        {error && (
          <span className="text-red-500 font-semibold text-xs">{error}</span>
        )}
      </div>
    </div>
  );
}

export { InputField };
