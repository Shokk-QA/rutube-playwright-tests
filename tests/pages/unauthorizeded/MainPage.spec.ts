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
test('Проверка доступности элементов списка добавления контента', async ({ mainPage }) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов Popup уведомлений', async ({ mainPage }) => {
  await mainPage.openNotificationPopupList();
  await mainPage.notificationPopupHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов модального окна авторизации', async ({ mainPage }) => {
  await mainPage.openAuthorizationModel();
  await mainPage.authorizationModelHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов модального регистрации', async ({ mainPage }) => {
  await mainPage.openAuthorizationModel();
  await mainPage.swithToRegistrationMode();
  await mainPage.regictrationModelHasCorrectAriaSnapshot();
});
