const find = require("appium-flutter-finder");
const assert = require("assert");

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    const button = await find.byText("Login");
    const findButtonText = await driver.getElementText(button);
    assert.strictEqual(findButtonText, "Login");

    await driver.elementClick(button);

    await driver.execute("flutter:waitFor", find.byType("TextFormField"));

    await driver.elementClick(find.byValueKey("login_email"));
    await driver.execute("flutter:enterText", "olashop@gmail.com");

    await driver.elementClick(find.byValueKey("login_password"));
    await driver.execute("flutter:enterText", "Tested2021");

    console.log("I am here" + Date());
    await driver.setImplicitTimeout(5000);
    console.log("I am here 2 " + Date());

    const loginButton = await find.byText("Log In");
    const findLoginButtonText = await driver.getElementText(loginButton);
    assert.strictEqual(findLoginButtonText, "Log In");

    await driver.elementClick(loginButton);

    await driver.execute("flutter:waitFor", find.byText("Welcome Back"));
  });
});
