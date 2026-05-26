import { test } from '@playwright/test';
import { AdminPage } from '../../pages/AdminPage';
import { ENV } from '../../config/env';

test('Admin can create, edit and delete a room', async ({ page }) => {
  const adminPage = new AdminPage(page);

  await adminPage.openHomePage();
  await adminPage.openAdminPage();

  await adminPage.login(ENV.ADMIN_USERNAME, ENV.ADMIN_PASSWORD);
  await adminPage.verifyAdminNavigationIsVisible();

  await adminPage.createRoom();
  await adminPage.editRoom();
  await adminPage.deleteRoom();
});