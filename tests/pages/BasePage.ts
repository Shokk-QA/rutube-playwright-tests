import { Page } from '@playwright/test';

export class BasePage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  async closeCookiesAlert() {
    try {
      await this.page.getByRole('button', { name: 'Ок', exact: true }).click();
    } catch (e) {
      // Кнопки нет — игнорируем
    }
  }
  async closeBanner() {
    try {
      await this.page.getByRole('button', { name: 'Закрыть' }).click();
    } catch (e) {
      // Нет баннера — ничего страшного
    }
  }
}
