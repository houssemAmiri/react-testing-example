import React from 'react'
const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title: string
  }
> = ({ title, ...props }) => <button role="add" {...props}>{title}</button>;

export default Button