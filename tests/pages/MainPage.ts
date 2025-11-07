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
  private readonly userLogoLocator: Locator;
  private readonly headerUserMenuLocator: Locator;

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

    this.fillPhoneNumberForRegistrationFormLocator = this.page
      .locator('iframe[title="Multipass"]')
      .contentFrame()
      .getByRole('textbox', { name: 'Введите телефон' });
    this.menuButtonLocator = this.page.getByRole('button', { name: 'Открыть меню навигации' });
    this.openMenuAriaLocator = this.page.locator('.menu-content-module__menuOpen');
    this.changeThemeButtonLocator = this.page.getByRole('button', {
      name: 'Переключить на светлую тему',
    });
    this.userLogoLocator = this.page.getByRole('img', { name: 'Иконка канала Данил' });
    this.headerUserMenuLocator = this.page.getByText(
      'Данилda****@mail.ruПрофильМой каналСтудия RUTUBEВыйти',
    );

    //action
  }
  async open() {
    await this.page.goto('https://rutube.ru/');
  }
  async openHeaderUserLogo() {
    await this.userLogoLocator.click();
  }
  async openFullMenu() {
    await this.menuButtonLocator.click();
  }
  async changeThemeToWhite() {
    await this.changeThemeButtonLocator.click();
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
  async switchToRegistrationMode() {
    await this.fillPhoneNumberForRegistrationFormLocator.fill('+79284995456');
    await this.loginAndRegistrarionButtonLocator.click();
  }

  //assertions
  async addPopupListHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerAddButtonListPopupLocator, 'addButtonToPopupList.yml');
  }
  async notificationPopupHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerNotificationPopupLocator, 'notificationsPopup.yml');
  }
  async fullMenuAriaHasCorrectAriaSnapshot() {
    // Очищаем динамичные ссылки и футер
    //Пришлось усложнить код а то из за динамических элементов тест падал
    await this.page.evaluate(() => {
      document.querySelectorAll('a[href*="appmetrica"]').forEach((el) => {
        if (el.parentElement) el.parentElement.remove();
      });
      document.querySelectorAll('.menu-content-module__menuOpen .listitem').forEach((li) => {
        if (!li.querySelector('a')) li.remove();
      });
      document.querySelectorAll('footer').forEach((el) => el.remove());
    });
    await this.checkAriaSnapshot(this.openMenuAriaLocator, 'MenuAriaSnapshot.yml');
  }
  async headerUserMenuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerUserMenuLocator, 'headerUserMenuSnapshot.yml');
  }
  async categoriesTabHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.categoriesTabLocator, 'categoriesTabSnaphot.yml');
  }
  async menuHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.menuLocator, 'menuSnaphot.yml');
  }
  async headerHasCorrectAriaSnapshot() {
    await this.checkAriaSnapshot(this.headerLocator, 'hederAriaSnaphot.yml');
  }
  async checkThemeAttributeValue(attributeValue: 'dark2021' | 'white2022') {
    await expect(this.page.locator('html')).toHaveAttribute('data-pen-theme', attributeValue);
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

  async registrationModelHasCorrectAriaSnapshot() {
    const formLocator = this.page
      .frameLocator('iframe[title="Multipass"]')
      .locator('div[role="form"]');
    await expect(formLocator).toBeVisible({ timeout: 10000 });
    await expect(formLocator).toMatchAriaSnapshot({
      name: 'regictrationModel.yml',
    });
  }
}
