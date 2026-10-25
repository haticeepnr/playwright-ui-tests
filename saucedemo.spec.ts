import { test, expect } from '@playwright/test';
test("Login yazan buton görünüyor mu?", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await expect(page.getByRole("button", { name: "Login" })).toBeVisible();

});
test("kullanıcı doğru kullanıcı adı ve şifreyle giriş yapabiliyor mu?", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});


test("kullanıcı doğru kullanıcı adı ve yanlış  şifreyle giriş yapamamalı", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("abcde");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page.getByText("Epic sadface: Username and password do not match any user in this service")).toBeVisible();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
});

