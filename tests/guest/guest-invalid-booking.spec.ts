import { test } from '@playwright/test';
import { GuestPage } from '../../pages/GuestPage';
import { invalidGuest } from '../../utils/test-data';

test('Guest cannot submit booking form with invalid email and phone number', async ({ page }) => {
  const guestPage = new GuestPage(page);

  await guestPage.openHomePage();
  await guestPage.selectBookingDates();
  await guestPage.checkAvailability();

  await guestPage.openSingleRoomDetails();
  await guestPage.verifyRoomDetailsPage();

  await guestPage.reserveRoom();

  await guestPage.completeBookingForm(
    invalidGuest.firstName,
    invalidGuest.lastName,
    invalidGuest.email,
    invalidGuest.phone
  );

  await guestPage.verifyInvalidBookingErrors();
});