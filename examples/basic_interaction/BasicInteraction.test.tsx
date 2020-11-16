import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BasicInteraction from "./BasicInteraction";

describe("Basic interaction", () => {
  it("should call the callback when clicked", () => {
    const handleClick = jest.fn();
    render(<BasicInteraction onClick={handleClick} />);

    userEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalled();
  });
});
