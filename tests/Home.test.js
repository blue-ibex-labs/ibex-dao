import React from "react";
import renderer from "react-test-renderer";
import HomePage from "../pages";

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<HomePage />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});
