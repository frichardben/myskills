import React from "react";
import { render } from "@testing-library/react-native";

import { SkillCard } from "../../components/SkillCard";
import { SkillCardProps } from "../../types";



describe("Home", () => {
  let props: SkillCardProps;

  beforeEach(() => {
    props = {
      skill: "Ruby on Rails",
    };
  });

  it("should be a function", () => {
    expect(typeof SkillCard).toBe("function");
  });

  it("should be able to render an task", () => {
    const { getByText } = render(<SkillCard skill={props.skill} />);

    expect(getByText("Ruby on Rails")).toBeDefined();
  });
});
