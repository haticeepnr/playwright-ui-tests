import { test, expect } from '@playwright/test';
test("bekleme", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByRole("textbox", { name: "Username" }).fill("performance_glitch_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});


test("start", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/dynamic_loading/1");
    await page.getByRole("button", { name: "Start" }).click();
    await expect(page.getByText("Hello World!")).toBeVisible({ timeout: 10000 });
});