import React from "react";
import renderer from "react-test-renderer";
import Wallet from "../components/CardList";

describe("Jest Snapshot testing suite", () => {
  it("Matches DOM Snapshot", () => {
    const domTree = renderer.create(<Wallet />).toJSON();
    expect(domTree).toMatchSnapshot();
  });
});