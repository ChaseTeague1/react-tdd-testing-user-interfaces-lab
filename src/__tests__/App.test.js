import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

// Your tests here
test("displays a top-leveling heading with text `Hi, I'm ______`", () => {
    render(<App />);
    const topLevelHeading = screen.getByRole("heading", {
        name: /hi, i'm/i,
        exact: false,
        level: 1
    });
    expect(topLevelHeading).toBeInTheDocument();
})

test("displays an image of yourself wit alt text identifying the image", () => {
    render(<App />);
    const imgOfYourself = screen.getByAltText("img of self");
    expect(imgOfYourself).toHaveAttribute('src', "https://via.placeholder.com/350")
})

test("displays second level heading with text content of 'About Me'", () => {
    render(<App />)
    const secondHeading = screen.getByRole('heading', {
        name : /about me/i,
        level: 2
    })
    expect(secondHeading).toBeInTheDocument();
})

test("displays a paragraph", () => {
    render(<App />)
    const paragraph = screen.getByText(/bio paragraph/i);
    expect(paragraph).toBeInTheDocument();
})

test("displays the correct links", () => {
    render(<App />);
  
    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin/i,
    });
  
    expect(githubLink).toHaveAttribute(
      "href",
      expect.stringContaining("https://github.com")
    );
  
    expect(linkedinLink).toHaveAttribute(
      "href",
      expect.stringContaining("https://linkedin.com")
    );
  });