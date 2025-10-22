import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../MainPage';

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
  await mainPage.hederHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов табов категорий', async ({ mainPage }) => {
  await mainPage.categoriesTabHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов бокового меню', async ({ mainPage }) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});
