import { expect } from "chai";
import { multiply } from "../../exercises/34-esm/multiply.js";
import { multiplier } from "../../exercises/34-esm/esm.js";

import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const multiplyFilePath = path.resolve(
  __dirname,
  "../../exercises/34-esm/multiply.js"
);

describe("ES Modules - Multiply", () => {
  describe("Named Exports", () => {
    it('should have a new file named "multiply.js" inside of "exercises/34-esm/". (NOTE that this is case sensitive)', () => {
      expect(fs.existsSync(multiplyFilePath)).to.be.true;
    });
    it('"multiply.js" should export the "multiply" function with named exports', () => {
      expect(multiply).to.be.a("function");
    });
    it('"esm.js" should import the "multiply" function from "multiply.js"', () => {
      expect(multiplier).to.be.a("function");
    });
    it('The "multiply" function should work', () => {
      const product = multiply(2, 5);
      expect(product).to.equal(10);
    });
  });
});
