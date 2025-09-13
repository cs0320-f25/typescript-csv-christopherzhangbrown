import { parseCSV } from "../src/basic-parser";
import * as path from "path";

const PEOPLE_CSV_PATH = path.join(__dirname, "../data/people.csv");

test("parseCSV yields arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  
  expect(results).toHaveLength(5);
  expect(results[0]).toEqual(["name", "age"]);
  expect(results[1]).toEqual(["Alice", "23"]);
  expect(results[2]).toEqual(["Bob", "thirty"]); // why does this work? :(
  expect(results[3]).toEqual(["Charlie", "25"]);
  expect(results[4]).toEqual(["Nim", "22"]);
});

test("parseCSV yields only arrays", async () => {
  const results = await parseCSV(PEOPLE_CSV_PATH)
  for(const row of results) {
    expect(Array.isArray(row)).toBe(true);
  }
});

// New comprehensive tests
test("parseCSV handles quoted fields with commas", async () => {
  const testPath = path.join(__dirname, "../data/quoted-commas.csv");
  const results = await parseCSV(testPath);
  
  expect(results[0]).toEqual(["Caesar", "Julius", "veni, vidi, vici"]);
});

test("parseCSV handles escaped quotes within quoted fields", async () => {
  const testPath = path.join(__dirname, "../data/escaped-quotes.csv");
  const results = await parseCSV(testPath);
  
  expect(results[0]).toEqual(["John", "He said \"Hello\" to me"]);
});

test("parseCSV preserves whitespace in fields", async () => {
  const testPath = path.join(__dirname, "../data/whitespace.csv");
  const results = await parseCSV(testPath);
  
  expect(results[0]).toEqual([" Alice ", " 23 ", " Engineer "]);
});

test("parseCSV handles empty fields", async () => {
  const testPath = path.join(__dirname, "../data/empty-fields.csv");
  const results = await parseCSV(testPath);
  
  expect(results[0]).toEqual(["Alice", "", "Engineer"]);
  expect(results[1]).toEqual(["Bob", "25", ""]);
  expect(results[2]).toEqual(["", "30", "Designer"]);
});

test("parseCSV handles mixed quoted and unquoted fields", async () => {
  const testPath = path.join(__dirname, "../data/mixed-quotes.csv");
  const results = await parseCSV(testPath);
  
  expect(results[0]).toEqual(["John", "25", "New York, NY", "Engineer"]);
  expect(results[1]).toEqual(["Jane", "30", "Boston", "Designer"]);
});

test("parseCSV handles unnecessary quotes around simple fields", async () => {
  const testPath = path.join(__dirname, "../data/unnecessary-quotes.csv");
  const results = await parseCSV(testPath);
  
  expect(results[0]).toEqual(["Alice", "23", "Engineer"]);
});

test("parseCSV handles empty file", async () => {
  const testPath = path.join(__dirname, "../data/empty.csv");
  const results = await parseCSV(testPath);
  
  expect(results).toEqual([]);
});

test("parseCSV handles single row", async () => {
  const testPath = path.join(__dirname, "../data/single-row.csv");
  const results = await parseCSV(testPath);
  
  expect(results).toHaveLength(1);
  expect(results[0]).toEqual(["Alice", "23", "Engineer"]);
});

test("parseCSV handles single column", async () => {
  const testPath = path.join(__dirname, "../data/single-column.csv");
  const results = await parseCSV(testPath);
  
  expect(results).toHaveLength(4);
  expect(results[0]).toEqual(["name"]);
  expect(results[1]).toEqual(["Alice"]);
  expect(results[2]).toEqual(["Bob"]);
  expect(results[3]).toEqual(["Charlie"]);
});

test("parseCSV handles rows with different lengths", async () => {
  const testPath = path.join(__dirname, "../data/uneven-rows.csv");
  const results = await parseCSV(testPath);
  
  expect(results[0]).toEqual(["Alice", "23"]);
  expect(results[1]).toEqual(["Bob", "30", "Engineer"]);
  expect(results[2]).toEqual(["Charlie"]);
});

test("parseCSV handles complex quoted content", async () => {
  const testPath = path.join(__dirname, "../data/complex-quotes.csv");
  const results = await parseCSV(testPath);
  
  expect(results[0]).toEqual(["Product", "Description", "Price"]);
  expect(results[1]).toEqual(["Widget", "A small, useful item", "10.99"]);
  expect(results[2]).toEqual(["Gadget", "Contains \"special\" parts, costs $20", "19.99"]);
});

test("parseCSV throws error for non-existent file", async () => {
  const nonExistentPath = path.join(__dirname, "../data/does-not-exist.csv");
  
  await expect(parseCSV(nonExistentPath)).rejects.toThrow();
});
