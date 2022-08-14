import { fireEvent, render, screen } from "@testing-library/react"
import Button from "."

test('testing button click', ()=>{
    const onClick = jest.fn();
    render(<Button title="submit" onClick={onClick}/>)
    const buttonElement = screen.getByRole("add")
    fireEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalledTimes(1)
})