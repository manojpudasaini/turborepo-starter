import React from "react";

interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
}

function Button({ text, icon, variant, type, onClick, loading }: IButtonProps) {
  return (
    <button
      disabled={loading}
      type={type}
      onClick={loading ? undefined : onClick}
      className="w-full bg-blue-400 text-white font-semibold p-4 rounded-md hover:shadow-md transition-shadow duration-300 active:bg-blue-500 active:outline active:outline-blue-300"
    >
      {loading ? <span className="animate-pulse">loading...</span> : text}
    </button>
  );
}

export default Button;
