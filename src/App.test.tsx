import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
describe("App component", () => {

  test("Edit src/App.tsx and save to reload", () => {
    render(<App />);
    const textContent = screen.getByText(/edit and save to reload\./i);
    expect(textContent).toBeInTheDocument();
  });

  test("if the banner exist", () => {
    render(<App />);
    const banner = screen.getByRole("banner");
    expect(banner).toBeInTheDocument();
  });

  test("codesweetly test heading", () => {
    render(<App />);
    expect(screen.getByRole("heading")).toHaveTextContent(/codesweetly test/i);
  });

  test("a codesweetly project heading", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: "Update Heading" });

    userEvent.click(button);

    expect(screen.getByRole("heading")).toHaveTextContent(
      /a codesweetly project/i
    );
  });

  
  test('verify if link exist', () => {
    render(<App />);
    const linkElement = screen.getByTestId('learn-link');
    expect(linkElement).toBeInTheDocument();
  });

  test('verify text in the link', () => {
    render(<App />);
    const linkElement = screen.getByTestId('learn-link');
    expect(linkElement).toHaveTextContent(
      /Visit Houssem website/i
    );
  });


  test('url is correct', ()=>{
    render(<App />)
    const linkElement = screen.getByTestId('learn-link').closest('a');
    expect(linkElement?.href).toContain('https://houssemamiri.com')
  })  
});