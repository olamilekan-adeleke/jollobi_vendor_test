const find = require("appium-flutter-finder");
const assert = require("assert");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    const button = await find.byText("Login");
    const findButtonText = await driver.getElementText(button);
    assert.strictEqual(findButtonText, "Login");

    await driver.elementClick(button);
  });
});
