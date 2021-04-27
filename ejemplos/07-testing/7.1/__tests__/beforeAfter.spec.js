beforeAll(() => console.log("fuera - beforeAll"));
afterAll(() => console.log("fuera - afterAll"));
beforeEach(() => console.log("fuera - beforeEach"));
afterEach(() => console.log("fuera - afterEach"));

describe("Dentro de describe", () => {
  beforeAll(() => console.log("describe - beforeAll"));
  afterAll(() => console.log("describe - afterAll"));
  beforeEach(() => console.log("describe - beforeEach"));
  afterEach(() => console.log("describe - afterEach"));

  // Test dentro del bloque
  it("", () => console.log("describe - test"));
});
