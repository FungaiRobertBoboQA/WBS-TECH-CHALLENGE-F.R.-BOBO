import { test } from '@playwright/test';
import { AdminPage } from '../../pages/AdminPage';

test('Unauthorised user cannot log in with invalid credentials', async ({ page }) => {
  const adminPage = new AdminPage(page);

  await adminPage.openHomePage();
  await adminPage.openAdminPage();

  await adminPage.login('Negative Test', 'Negative password');

  await adminPage.verifyAdminNavigationIsNotVisible();
});