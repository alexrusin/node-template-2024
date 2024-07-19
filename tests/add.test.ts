import { add } from "../src/utils";

jest.mock("../src/config", () => ({
  debug: true,
}));

it("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});
