import config from "./config";

export function add(a: number, b: number) {
  if (config.debug) {
    console.debug(`Calling add function with arguments ${a} and ${b}`);
  }

  return a + b;
}
