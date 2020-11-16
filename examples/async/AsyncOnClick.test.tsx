import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import Api from "./api";
import AsyncOnClick from "./AsyncOnClick";
import userEvent from "@testing-library/user-event";

describe("Async on render", () => {
  it("should fetch users", async () => {
    jest.spyOn(Api.prototype, "getUsers").mockResolvedValue([
      {
        id: "1",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@acme.com",
      },
    ]);

    render(<AsyncOnClick />);
    userEvent.click(screen.getByRole("button"));

    expect(screen.getByText(/loading/)).toBeInTheDocument();
    expect(await screen.findByRole("listitem")).toHaveTextContent("John Doe");
    expect(Api.prototype.getUsers).toHaveBeenCalled();
  });

  it("should handle errors", async () => {
    jest.spyOn(Api.prototype, "getUsers").mockRejectedValue("error");

    render(<AsyncOnClick />);
    userEvent.click(screen.getByRole("button"));

    expect(screen.getByText(/loading/)).toBeInTheDocument();
    expect(
      await screen.findByText("something went wrongsssss")
    ).toBeInTheDocument();
    expect(Api.prototype.getUsers).toHaveBeenCalled();
  });
});
