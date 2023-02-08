import React from "react";
import renderer from "react-test-renderer";
import MintingForm from "../pages/form";

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<MintingForm />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
