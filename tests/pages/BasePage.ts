import { expect, Locator, Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async closeCookiesAlert() {
    try {
      await this.page.getByRole('button', { name: 'Ок' }).click({ timeout: 2000 });
    } catch (e) {
      // Окно не появилось — просто игнорируем
    }
  }
  async closeBanner() {
    try {
      await this.page.getByRole('button', { name: 'Закрыть' }).click({ timeout: 2000 });
    } catch (e) {
      // Окно не появилось — просто игнорируем
    }
  }
  protected async checkAriaSnapshot(locator: Locator, ariaName: string) {
    await expect(locator).toMatchAriaSnapshot({
      name: ariaName,
    });
  }
}
