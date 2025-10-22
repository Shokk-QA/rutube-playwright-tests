import test from '@playwright/test';
import { MainPage } from '../MainPage';

test('Проверка доступности элементов хедера', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await page.getByRole('button', { name: 'Закрыть' }).click();
  await mainPage.closeCookiesAlert();
  await mainPage.hederHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов табов категорий', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await page.getByRole('button', { name: 'Закрыть' }).click();
  await mainPage.closeCookiesAlert();
  await mainPage.categoriesTabHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов бокового меню', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
  await page.getByRole('button', { name: 'Закрыть' }).click();
  await mainPage.closeCookiesAlert();
  await mainPage.menuHasCorrectAriaSnapshot();
});
