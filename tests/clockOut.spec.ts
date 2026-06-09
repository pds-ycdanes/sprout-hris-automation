import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://sso.sprout.ph/realms/pdsc/protocol/openid-connect/auth?client_id=SproutSSO&redirect_uri=https%3A%2F%2Fpdsc.hrhub.ph%2F&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DlRRmiGGVPLCdpdQVljnGUVyxaldq_aw-ymf3Hg8fYn6O61faoy8bNzg79WgJbuGCqLdAIF5i_TtOTLi6_VmzyuOLSM7TH2OBeMQTH6Cjvr7VYDXgcl71PhtNeaWOokRxOujQq7h8pfMF6uOk392hae-nRojelnKUB3_dGFAKY7nsk8FlhOTyK584MWxwRUzjTcR2EQ&response_mode=form_post&nonce=639166105364708428.ZmY1NzQ2MTYtNzZlNy00MTMwLWExNGItMWY4NDQ3MTEwZmMzODcwODEyYjgtZTgxOC00ODE0LWIyOWEtZDdkMWExOTBmODky&x-client-SKU=ID_NET461&x-client-ver=5.3.0.0",
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
  await page.getByRole("link", { name: " Clock Out" }).click();
  await page.getByRole("button", { name: "Yes" }).click();
  await page.getByRole("button", { name: "OK" }).click();
});
