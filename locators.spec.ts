import { test, expect } from '@playwright/test';
test("giriş yapma", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});
test("sepete ekleme", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.getByTestId("add-to-cart-sauce-labs-backpack").click();
    await expect(page.getByTestId("shopping-cart-badge")).toHaveText("1");
    await page.getByTestId("shopping-cart-link").click();
    await expect(page.getByText("Sauce Labs Backpack")).toBeVisible();
});

test("filter ile sepete ekleme", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.getByRole("textbox", { name: "Username" }).fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button", { name: "Login" }).click();
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
    await page.getByTestId("inventory-item").filter({ hasText: "Sauce Labs Bike Light" }).getByRole("button", { name: "Add to cart" }).click();
    await expect(page.getByTestId("shopping-cart-badge")).toHaveText("1");
    await page.getByTestId("shopping-cart-link").click();
    await expect(page.getByText("Sauce Labs Bike Light")).toBeVisible();
});