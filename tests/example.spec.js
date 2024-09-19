import { test, expect } from "@playwright/test";

test("Home visible", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const title = page.getByText("Popular Titles");

  const moviesLink = page.getByText("Popular Movies");

  const seriesLink = page.getByText("Popular Series");

  await expect(title).toBeVisible();
  await expect(moviesLink).toBeVisible();
  await expect(seriesLink).toBeVisible();
});

test("Movies visible", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const moviesLink = page.getByText("Popular Movies");

  await moviesLink.click();

  const title = page.getByText("Popular Movies");
  const legoMovie = page.getByText("A Lego Brickumentary");

  await expect(title).toBeVisible();
  await expect(legoMovie).toBeVisible();
});

test("Series visible", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const seriesLink = page.getByText("Popular Series");

  await seriesLink.click();

  const title = page.getByText("Popular Series");
  const acquitted = page.getByText("Acquitted");

  await expect(title).toBeVisible();
  await expect(acquitted).toBeVisible();
});

test("On click open modal and close", async ({ page }) => {
  await page.goto("http://localhost:5173");

  const seriesLink = page.getByText("Popular Series");

  await seriesLink.click();

  const acquitted = page.getByText("Acquitted");

  await acquitted.click();

  const modal = page.getByText("Lorem ipsum dolor sit amet");

  await expect(modal).toBeVisible();

  const close = page.getByRole("button", { name: "X" });

  await close.click();

  await expect(modal).not.toBeVisible();
});
