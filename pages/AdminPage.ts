import { expect, Page } from '@playwright/test';

export class AdminPage {
  constructor(private page: Page) {}

  async openHomePage() {
    await this.page.goto('/');
  }

  async openAdminPage() {
    await this.page
      .locator('ul.navbar-nav.ms-auto a.nav-link[href="/admin"]')
      .click();
  }

  async login(username: string, password: string) {
    await this.page.locator('#username').fill(username);
    await this.page.locator('#password').fill(password);
    await this.page.locator('#doLogin').click();
  }

  async verifyAdminNavigationIsVisible() {
    await expect(
      this.page.locator('a.nav-link.active[href="/admin/rooms"]')
    ).toBeVisible();

    await expect(this.page.locator('#reportLink')).toBeVisible();

    await expect(this.page.locator('#brandingLink')).toBeVisible();

    await expect(
      this.page.locator('a.nav-link[href="/admin/message"]')
    ).toBeVisible();
  }

  async verifyAdminNavigationIsNotVisible() {
    await expect(
      this.page.locator('a.nav-link.active[href="/admin/rooms"]')
    ).not.toBeVisible();

    await expect(this.page.locator('#reportLink')).not.toBeVisible();

    await expect(this.page.locator('#brandingLink')).not.toBeVisible();
  }

  async createRoom() {
    const roomNumber = '104';

    await this.page.locator('#roomName').fill(roomNumber);

    await this.page.locator('#type').selectOption('Single');

    await this.page.locator('#accessible').selectOption('true');

    await this.page.locator('#roomPrice').fill('120');

    await this.page.locator('#wifiCheckbox').check();
    await this.page.locator('#tvCheckbox').check();
    await this.page.locator('#radioCheckbox').check();
    await this.page.locator('#refreshCheckbox').check();
    await this.page.locator('#safeCheckbox').check();
    await this.page.locator('#viewsCheckbox').check();

    await this.page.locator('#createRoom').click();

    await expect(
      this.page
        .locator('[data-testid="roomlisting"]')
        .filter({
          hasText: roomNumber,
        })
    ).toBeVisible();
  }

  async editRoom() {
    await this.page
      .locator('[data-testid="roomlisting"]')
      .filter({
        hasText: '104',
      })
      .first()
      .click();

    await this.page
      .getByRole('button', { name: 'Edit' })
      .click();

    await this.page.locator('#roomName').clear();

    await this.page.locator('#roomName').fill('333');

    await this.page.locator('#type').selectOption('Family');

    await this.page.locator('#accessible').selectOption('true');

    await this.page.locator('#roomPrice').clear();

    await this.page.locator('#roomPrice').fill('333');

    await this.page.locator('#description').clear();

    await this.page
      .locator('#description')
      .fill('Test description');

    await this.page.locator('#image').clear();

    await this.page
      .locator('#image')
      .fill('/images/room2.jpg');

    await this.page.locator('#update').click();

    await expect(
      this.page.getByRole('heading', {
        name: /Room: 333/,
      })
    ).toBeVisible();
  }

  async deleteRoom() {
    const roomToDelete = this.page
      .locator('[data-testid="roomlisting"]')
      .filter({
        hasText: '333',
      })
      .first();

    await expect(roomToDelete).toBeVisible();

    const roomCountBefore = await this.page
      .locator('[data-testid="roomlisting"]')
      .count();

    await roomToDelete.locator('.roomDelete').click();

    await this.page.waitForTimeout(2000);

    const roomCountAfter = await this.page
      .locator('[data-testid="roomlisting"]')
      .count();

    expect(roomCountAfter).toBeLessThan(roomCountBefore);
  }
}