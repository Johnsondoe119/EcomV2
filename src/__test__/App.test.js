// jesttest.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import About from "../src/Component/About";

test("renders the title 'Seazons Wear'", () => {
  render(<About />);
  const titleElement = screen.getByText("Seazons Wear");
  expect(titleElement).toBeInTheDocument();
});

test("renders the heading 'Contact'", () => {
  render(<About />);
  const headingElement = screen.getByText("Contact");
  expect(headingElement).toBeInTheDocument();
});

test("renders the heading 'Please leave us a message!' inside the contact form", () => {
  render(<About />);
  const headingElement = screen.getByText("Please leave us a message!");
  expect(headingElement).toBeInTheDocument();
});

test("renders the Slideshow component", () => {
  render(<About />);
  const slideshowElement = screen.getByTestId("slideshow");
  expect(slideshowElement).toBeInTheDocument();
});
