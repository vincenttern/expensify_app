const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

test("should add two numbers", () => {
  const result = add(3, 4);
  expect(result).toBe(7);
});

test("should return a name", () => {
  const name = generateGreeting("Vincent");
  expect(name).toBe("Hello Vincent!");
});

test("should generate greeting for no name", () => {
  const name = generateGreeting();
  expect(name).toBe("Hello Anonymous!");
});
