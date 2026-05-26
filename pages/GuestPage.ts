import { expect, Page } from '@playwright/test';

export class GuestPage {
  constructor(private page: Page) {}

  async openHomePage() {
    await this.page.goto('/');
  }

  async selectBookingDates() {
    await this.page.locator('input.form-control').first().click();
    await this.page.getByLabel('Choose Saturday, 30 May 2026').click();

    await this.page.locator('input.form-control').nth(1).click();
    await this.page.getByLabel('Choose Sunday, 31 May 2026').click();
  }

  async checkAvailability() {
    await this.page.getByRole('button', { name: 'Check Availability' }).click();
  }

  async openSingleRoomDetails() {
    await this.page.locator('a[href*="/reservation/1"]').first().click();
  }

  async openDoubleRoomDetails() {
    await this.page.locator('a[href*="/reservation/2"]').first().scrollIntoViewIfNeeded();
    await this.page.locator('a[href*="/reservation/2"]').first().click();
  }

  async openSuiteRoomDetails() {
    await this.page.locator('a[href*="/reservation/3"]').first().scrollIntoViewIfNeeded();
    await this.page.locator('a[href*="/reservation/3"]').first().click();
  }

  async verifyRoomDetailsPage() {
    await expect(this.page.locator('h2:has-text("Room Description")')).toBeVisible();
    await expect(this.page.locator('h2:has-text("Room Features")')).toBeVisible();
    await expect(this.page.locator('h2:has-text("Room Policies")')).toBeVisible();
    await expect(this.page.locator('h2:has-text("Book This Room")')).toBeVisible();
    await expect(this.page.locator('span.badge.bg-success:has-text("Accessible")')).toBeVisible();
  }

  async reserveRoom() {
    await this.page.locator('#doReservation').click();
  }

  async completeBookingForm(firstName: string, lastName: string, email: string, phone: string) {
    await this.page.locator('input[name="firstname"]').fill(firstName);
    await this.page.locator('input[name="lastname"]').fill(lastName);
    await this.page.locator('input[name="email"]').fill(email);
    await this.page.locator('input[name="phone"]').fill(phone);

    await this.page.getByRole('button', { name: 'Reserve Now' }).click();
  }

  async verifyBookingConfirmed() {
  await expect(
    this.page.locator('h2.card-title.fs-4.fw-bold.mb-3')
  ).toHaveText('Booking Confirmed');
}

  async returnHome() {
    await this.page.locator('a[href="/"]:has-text("Return home")').click();
  }

  async verifyInvalidBookingErrors() {
    await expect(this.page.getByText('must be a well-formed email address')).toBeVisible();
    await expect(this.page.getByText('size must be between 11 and 21')).toBeVisible();
  }
}