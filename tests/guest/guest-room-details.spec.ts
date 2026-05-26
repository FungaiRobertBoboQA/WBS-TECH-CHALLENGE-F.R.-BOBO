import { test } from '@playwright/test';
import { GuestPage } from '../../pages/GuestPage';

test('Guest can view available rooms and room details', async ({ page }) => {
  const guestPage = new GuestPage(page);

  await guestPage.openHomePage();

  await guestPage.openSingleRoomDetails();
  await guestPage.verifyRoomDetailsPage();

  await page.goto('/');

  await guestPage.openDoubleRoomDetails();
  await guestPage.verifyRoomDetailsPage();

  await page.goto('/');

  await guestPage.openSuiteRoomDetails();
  await guestPage.verifyRoomDetailsPage();
});