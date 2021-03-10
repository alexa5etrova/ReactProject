import React from "react";
import { create } from "react-test-renderer";
import Status from "./Status";


describe("Status component", () => {
  test("Status from props should be in state", () => {
    const component = create(<Status status="Helloooo" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Helloooo");
  });

  test("after creation <span></span> should be displayed", () => {
    const component = create(<Status status="Helloooo"  />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.length).not.toBeNull();
  });

  test("after creation <input> should not be displayed", () => {
    const component = create(<Status status="Helloooo"  />);
    const root = component.root;
    expect(()=>{
      let input = root.findByType("input")
    }).toThrow();
  });



  test("after creation <span></span> should contain correct status", () => {
    const component = create(<Status status="Helloooo"  />);
    const root = component.root;
    const span = root.findByType("span");
    expect(span.children[0]).toBe("Helloooo");
  });


  test("input should be displayed in edit mode instead of span", () => {
    const component = create(<Status status="Helloooo"  />);
    const root = component.root;
    const span = root.findByType("span");
    span.props.onDoubleClick();
    let input = root.findByType("input")
    expect(input.props.value).toBe("Helloooo");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(<Status status="Helloooo"  pushStatus={mockCallback}/>);
    const instance = component.getInstance();
    instance.closeEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});