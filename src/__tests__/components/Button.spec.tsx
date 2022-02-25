import React from "react";
import { render } from "@testing-library/react-native";
import { Button } from "../../components/Button";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

describe("Button", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      title: "New button",
    };
  });
  it("should be a function", () => {
    expect(typeof Button).toBe("function");
  });

  it("should be able to render button text", () => {
    const { getByText } = render(<Button title={props.title} />);

    expect(getByText("New button")).toBeDefined();
  });
});
