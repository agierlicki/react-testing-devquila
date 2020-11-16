import React from "react";
import {
  screen,
  render,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Api from "./api";
import AsyncOnRender from "./AsyncOnRender";

describe("Async on render", () => {
  it("should render users", async () => {
    jest.spyOn(Api.prototype, "getUsers").mockResolvedValue([
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@acme.com",
      },
    ]);

    const { container } = render(<AsyncOnRender />);

    expect(container).toBeEmptyDOMElement();
    expect(await screen.findByRole("listitem")).toHaveTextContent("John Doe");
    expect(screen.queryByText("No users found!")).not.toBeInTheDocument();
    expect(Api.prototype.getUsers).toHaveBeenCalled();
  });

  it("should show empty message", async () => {
    jest.spyOn(Api.prototype, "getUsers").mockResolvedValue([]);

    const { container } = render(<AsyncOnRender />);

    expect(container).toBeEmptyDOMElement();
    expect(await screen.findByText("No users found!")).toBeInTheDocument();
  });

  it("should handle errors", () => {
    jest.spyOn(Api.prototype, "getUsers").mockRejectedValue("error");

    const { container } = render(<AsyncOnRender />);

    expect(container).toBeEmptyDOMElement();
  });
});
