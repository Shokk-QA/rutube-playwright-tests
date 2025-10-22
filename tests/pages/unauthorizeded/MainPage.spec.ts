import test from '@playwright/test';
import { MainPage } from '../MainPage';

test('Открытие главной страницы', async ({ page }) => {
  const mainPage = new MainPage(page);
  await mainPage.open();
});
