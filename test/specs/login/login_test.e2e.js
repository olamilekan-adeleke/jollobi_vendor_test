const find = require("appium-flutter-finder");
const assert = require("assert");

describe("Test Login", () => {
  it("should not be able to login without credentials", async () => {
    const button = await find.byText("Login");
    const findButtonText = await driver.getElementText(button);
    assert.strictEqual(findButtonText, "Login");

    await driver.elementClick(button);

    await driver.execute(
      "flutter:waitFor",
      find.byType("CircularProgressIndicator"),
      1000
    );
  });
});
