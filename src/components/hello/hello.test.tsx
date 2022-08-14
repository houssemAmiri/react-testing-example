import React from 'react';
import { render, screen } from "@testing-library/react";
import Hello from '.';

test("render the name ", ()=>{
    render(<Hello name='Houssem'/>)
    const divElement = screen.getByRole("information")
    expect(divElement).toHaveTextContent("Hello, my name is Houssem");
    expect(divElement).toHaveAttribute("role", "information");
})