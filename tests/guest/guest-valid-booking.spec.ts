import { test } from '@playwright/test';
import { GuestPage } from '../../pages/GuestPage';
import { validGuest } from '../../utils/test-data';

test('Guest can create a valid room booking', async ({ page }) => {
  const guestPage = new GuestPage(page);

  await guestPage.openHomePage();
  await guestPage.selectBookingDates();
  await guestPage.checkAvailability();

  await guestPage.openSingleRoomDetails();
  await guestPage.verifyRoomDetailsPage();

  await guestPage.reserveRoom();

  await guestPage.completeBookingForm(
    validGuest.firstName,
    validGuest.lastName,
    validGuest.email,
    validGuest.phone
  );

  await guestPage.verifyBookingConfirmed();
  await guestPage.returnHome();
});