import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class MainPage extends BasePage {
  private readonly headerLocator: Locator;
  private readonly categoriesTabLocator: Locator;
  private readonly menuLocator: Locator;
  private readonly headerAddButtonLocator: Locator;
  private readonly headerNotificationButtonLocator: Locator;
  private readonly headerLoginButtonLocator: Locator;
  private readonly headerAddButtonListPopupLocator: Locator;
  private readonly headerNotificationPopupLocator: Locator;
  private readonly authorizationModelLocator: Locator;
  private readonly fillPhoneNumberForRegistrationFormLocator: Locator;
  private readonly loginAndRegistrarionButtonLocator: Locator;
  private readonly menuButtonLocator: Locator;
  private readonly openMenuAriaLocator: Locator;
  private readonly changeThemeButtonLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.headerLocator = this.page.getByRole('banner');
    this.categoriesTabLocator = this.page.locator('section').filter({
      hasText: /^ГлавнаяФильмыСериалыТелешоуСпортБлогерыНовостиМузыкаПодкастыДетямТВ онлайн$/,
    });
    this.menuLocator = this.page.getByLabel('Облегченная панель навигации');
    this.headerAddButtonLocator = this.page.getByRole('button', { name: 'Добавить' });
    this.headerNotificationButtonLocator = this.page.getByRole('button', { name: 'Уведомления' });
    this.headerLoginButtonLocator = this.page.getByRole('button', { name: 'Вход и регистрация' });
    this.headerAddButtonListPopupLocator = this.page.locator(
      '.wdp-header-right-module__uploader ul',
    );
    this.headerNotificationPopupLocator = this.page.locator(
      '.wdp-notifications-popup-module__wrapper',
    );
    this.authorizationModelLocator = this.page.locator('div[role="form"]');
    this.loginAndRegistrarionButtonLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .getByRole('button', { name: 'Продолжить' });
    // .locator('div[role="form"]')
    // .getByRole('button', { name: 'Продолжить' });

    this.fillPhoneNumberForRegistrationFormLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .getByRole('textbox', { name: 'Введите телефон' });
    // .locator('div[role="form"]')
    // .getByRole('textbox', { name: 'Введите телефон' });
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-content-module__menuOpen');
    this.changeThemeButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  async openFullMenu() {
    await this.menuButtonLocator.click();
    this.changeThemeButtonLocator.click();
  }
  async changeThemeToWhile() {
    await this.changeThemeButtonLocator.click();
  }
  async hederHasCorrectAriaSnapshot() {
    await expect(this.headerLocator).toMatchAriaSnapshot({ name: 'hederAriaSnaphot.yml' });
  }
  async categoriesTabHasCorrectAriaSnapshot() {
    await expect(this.categoriesTabLocator).toMatchAriaSnapshot({
      name: 'categoriesTabSnaphot.yml',
    });
  }
  async menuHasCorrectAriaSnapshot() {
    await expect(this.menuLocator).toMatchAriaSnapshot({ name: 'menuSnaphot.yml' });
  }
  async openAddPopupList() {
    await this.headerAddButtonLocator.click();
  }
  async openNotificationPopupList() {
    await this.headerNotificationButtonLocator.click();
  }
  async openAuthorizationModel() {
    await this.headerLoginButtonLocator.click();
    await this.fillPhoneNumberForRegistrationFormLocator.fill('+79284995456');
  }
  async fillPhoneNumber() {
    await this.fillPhoneNumberForRegistrationFormLocator.fill('+79284995456');
  }
  async swithToRegistrationMode() {
    await this.fillPhoneNumberForRegistrationFormLocator.fill('+79284995456');
    await this.loginAndRegistrarionButtonLocator.click();
  }
  async addPopupListHasCorrectAriaSnapshot() {
    await expect(this.headerAddButtonListPopupLocator).toMatchAriaSnapshot({
      name: 'addButtonToPopupList.yml',
    });
  }
  async notificationPopupHasCorrectAriaSnapshot() {
    await expect(this.headerNotificationPopupLocator).toMatchAriaSnapshot({
      name: 'notificationsPopup.yml',
    });
  }
  async authorizationModelHasCorrectAriaSnapshot() {
    const formLocator = this.page
      .frameLocator('iframe[title="Multipass"]')
      .locator('div[role="form"]');
    await expect(formLocator).toBeVisible({ timeout: 10000 });
    await expect(formLocator).toMatchAriaSnapshot({
      name: 'authorizationModel.yml',
    });
  }

  async regictrationModelHasCorrectAriaSnapshot() {
    const formLocator = this.page
      .frameLocator('iframe[title="Multipass"]')
      .locator('div[role="form"]');
    await expect(formLocator).toBeVisible({ timeout: 10000 });
    await expect(formLocator).toMatchAriaSnapshot({
      name: 'regictrationModel.yml',
    });
  }
  async fullMenuAriaHasCorrectAriaSnapshot() {
    await expect(this.openMenuAriaLocator).toMatchAriaSnapshot({
      name: 'MenuAriaSnapshot.yml',
    });
  }
  async checkThemeAttributeValue(attibudeValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attibudeValue);
  }
}
