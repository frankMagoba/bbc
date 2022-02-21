import { convertToArray, getParagraphs } from "../../index";

import jsonData from "../../../data/english.json";

import { expected1, expected2 } from "./data";

describe("JsonFormatter Util", () => {
  test("SHOULD RECEIVE EXPECTED DATA", () => {
    expect(convertToArray(jsonData)).toEqual(expected1);
  });
});

describe("TESTING SECOND ALGORITHM", () => {
  test("SHOULD RECEIVE EXPECTED DATA", () => {
    expect(getParagraphs(jsonData)).toMatchObject(expected2);
  });
});
