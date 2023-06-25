function balancedBrackets(string) {
  // Write your code here.
  let stack = [];
  const set = new Set(["(", "{", "[", "]", "}", ")"]);
  for (let i = 0; i < string.length; i++) {
    const item = string.charAt(i);
    if (set.has(item)) {
      if (item === ")" || item === "}" || item === "]") {
        if (
          (item === ")" && stack[stack.length - 1] === "(") ||
          (item === "}" && stack[stack.length - 1] === "{") ||
          (item === "]" && stack[stack.length - 1] === "[")
        )
          stack.pop();
        else {
          stack.push(item);
          break;
        }
      } else stack.push(item);
    } else continue;
  }
  return stack.length === 0;
}
