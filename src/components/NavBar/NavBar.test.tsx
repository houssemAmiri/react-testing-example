import { render, screen } from '@testing-library/react'
import React from 'react'
import NavBar from '.'


test("render navBar elements", ()=>{
    const items = [
        {
          name: "test",
          link: "/test",
        },
        {
            name: "test1",
            link: "/test1",
        },
      ];
    render(<NavBar items={items}/>)
    const anchorElements = screen.getAllByRole("navigation")
    expect(anchorElements[0]).toHaveTextContent(items[0].name)
    expect(anchorElements[0]).toHaveAttribute("href", items[0].link);
})