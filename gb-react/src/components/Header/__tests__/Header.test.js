import React from "react";
import { render } from "@testing-library/react";
import { Header } from "../index";

describe("Header", () => {
  it("matches snapshot", () => {
    const component = render(<Header />);

    expect(component).toMatchSnapshot();
  });
});
