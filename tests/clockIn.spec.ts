import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://sso.sprout.ph/realms/pdsc/protocol/openid-connect/auth?client_id=SproutSSO&redirect_uri=https%3A%2F%2Fpdsc.hrhub.ph%2F&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3D2TZMje1GmZRFVyRfVYJhgmvB3AkUZ2HPsVq_pfl9K7DSDlYVSsBB4EwzsgbxGzXoJre4tb7KN8-O_x3ZCmi27-0P9xV-F0uha5fn9qNFc0qcytfy-NPcOfhCL-cFSeSxA23SKwGhyM79hEHuahwJuvFgULbRTncnS3C1Qrbg-hUuoCFUoYKghEHLU1LE2Y2n8hAxYg&response_mode=form_post&nonce=639166581587637684.YTYxNDJjNzMtYzgwYi00NTI0LWFkZmMtNjA3YjA4OGY2NzcxZjVjNjg3OGQtY2I0ZC00NmY0LTkwMTgtOWFkOGI5Y2U2NGNk&x-client-SKU=ID_NET461&x-client-ver=5.3.0.0",
  );
  await page.getByRole("textbox", { name: "Email or Username" }).click();
  await page
    .getByRole("textbox", { name: "Email or Username" })
    .fill(process.env.SPROUT_USERNAME);
  await page.getByRole("textbox", { name: "Email or Username" }).press("Tab");
  await page
    .getByRole("textbox", { name: "Password" })
    .fill(process.env.SPROUT_PASSWORD);
  await page.getByRole("button", { name: "Log in" }).click();
  await page.goto("https://pdsc.hrhub.ph/EmployeeDashboard.aspx");
  await page.getByRole("button").nth(2).click();
  await page.getByRole("link", { name: " Clock In" }).click();
  await page.getByRole("button", { name: "Yes" }).click();
  await page.getByRole("button", { name: "OK" }).click();
});
