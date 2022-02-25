import React from "react";
import { render, fireEvent } from "@testing-library/react-native";

import { Home } from "../../pages/Home";

describe("Home", () => {
  it("should be a function", () => {
    expect(typeof Home).toBe("function");
  });

  it("should be able to render new added tasks", () => {
    const { getByPlaceholderText, getByText } = render(<Home />);
    const inputElement = getByPlaceholderText("New skill");
    const button = getByText("Adicionar");

    fireEvent.changeText(inputElement, "React Native");
    fireEvent.press(button, {});

    expect(getByText("React Native")).toBeDefined();

    fireEvent.changeText(inputElement, "Node.js");
    fireEvent.press(button, {});

    expect(getByText("Node.js")).toBeDefined();
  });
});
