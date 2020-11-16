import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import MultipleElements from "./MultipleElements";

describe("Basic interaction", () => {
  it("should call the callback when clicked", () => {
    const handleAccept = jest.fn();
    const handleCancel = jest.fn();
    render(
      <MultipleElements onAccept={handleAccept} onCancel={handleCancel} />
    );

    expect(screen.getAllByRole("button")).toHaveLength(2);

    userEvent.click(screen.getByRole("button", { name: "Ok" }));
    expect(handleAccept).toHaveBeenCalled();
  });
});
