import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async closeCookiesAlert() {
    try {
      await this.page.waitForSelector('selector', { timeout: 2000 });
      await this.page.locator('selector').click();
    } catch (e) {
      // Окно не появилось — просто игнорируем
    }
  }
  async closeBanner() {
    try {
      await this.page.waitForSelector('selector', { timeout: 2000 });
      await this.page.locator('selector').click();
    } catch (e) {
      // Окно не появилось — просто игнорируем
    }
  }
}
