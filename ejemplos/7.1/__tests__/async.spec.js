describe("callbacks", () => {
  it("comprueba el callback", (done) => {
    const callback = () => {
      expect(1 + 1).toBe(2);
      done();
    };

    callback();
  });
});

describe("promise", () => {
  it("resuelve la promesa", () => {
    return Promise.resolve("test").then((data) => {
      expect(data).toBe("test");
    });
  });

  it("cancela la promesa", () => {
    expect.assertions(1);
    return Promise.reject("error").catch((err) => {
      expect(err).toMatch("error");
    });
  });

  it("resuelve la promesa directamente con expect", () => {
    return expect(Promise.resolve("test")).resolves.toBe("test");
  });

  it("cancela la promesa directamente con expect", () => {
    return expect(Promise.reject("error")).rejects.toBe("error");
  });
});
