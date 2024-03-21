export function generateId(length: number = 5): string {
  const chars =
    "ABCDEFGHIJabcdefghij0123456789";
  let result = "";
  for (let i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
}
