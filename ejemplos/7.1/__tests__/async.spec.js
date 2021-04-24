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

describe("async / await", () => {
  it("resuelve haciendo uso de async / await", async () => {
    const result = await Promise.resolve("test");
    expect(result).toBe("test");
  });

  it("cancela haciendo uso de async / await", async () => {
    expect.assertions(1);

    try {
      const result = await Promise.reject("error");
    } catch (err) {
      expect(err).toMatch("error");
    }
  });

  it("resuelve haciendo uso de async / await y el metodo resolve", async () => {
    await expect(Promise.resolve("test")).resolves.toBe("test");
  });

  it("cancela haciendo uso de async / await y el metodo expect", async () => {
    await expect(Promise.reject("error")).rejects.toBe("error");
  });
});
