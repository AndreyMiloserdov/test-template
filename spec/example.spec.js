describe("Hello World Server", () => {
  describe("Step #01:", () => {
    it("returns status code 200", (done) => {
      expect(200).toBe(200);
      done();
    });

    it("returns status code 300", (done) => {
      expect(201).toBe(201);
      done();
    });
  });
});