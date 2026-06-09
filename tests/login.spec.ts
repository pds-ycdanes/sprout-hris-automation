import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto(
    "https://sso.sprout.ph/realms/pdsc/protocol/openid-connect/auth?client_id=SproutSSO&redirect_uri=https%3A%2F%2Fpdsc.hrhub.ph%2F&response_type=code%20id_token&scope=openid%20profile&state=OpenIdConnect.AuthenticationProperties%3DWqhoGwI9GeGBjtgUVXVYJMKPLzAppr5iN-0RoILPDl4wy97UK6mutpD2de9-5y49wcTHRS9BmuSNVrNvmGdQhPlQo61tFmfvt87xMXKzgPmGGoXWhk2sGFZaXmSDmI2hgDx4X25ygtWbPVmaiumXS3go6MUyiPH_ZI1ntGilEJcUPiFNTHDb_3BNhOZsjyGLNIvsow&response_mode=form_post&nonce=639165991267263243.OWMwNGQ4N2UtYzk0ZC00MDI1LWEzZjgtMjYyOGM5ZTU3ZDJkMmQ0ZTBlYTItZmFiNy00MGRhLWFkOTUtMGU4ZDNjOTdlMGIy&x-client-SKU=ID_NET461&x-client-ver=5.3.0.0",
  );
  await page.getByRole("textbox", { name: "Email or Username" }).click();
  await page
    .getByRole("textbox", { name: "Email or Username" })
    .fill(env.SPROUT_USERNAME);
  await page.getByRole("textbox", { name: "Email or Username" }).press("Tab");
  await page
    .getByRole("textbox", { name: "Password" })
    .fill(env.SPROUT_PASSWORD);
  await page.getByRole("button", { name: "Log in" }).click();
});
