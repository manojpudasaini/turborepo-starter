import React from "react";

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  type?: string;
  disabled?: boolean;
  id?: string;
  field?: any;
}

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
}: InputFieldProps) {
  return (
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
        className="ring ring-blue-300 w-full outline-none rounded-md h-10 p-3 focus:ring-blue-500 transition-all duration-300"
        onChange={(e) => {
          field ? field.onChange(e.target.value) : onChange && onChange(e);
        }}
      />
    </div>
  );
}

export { InputField };
