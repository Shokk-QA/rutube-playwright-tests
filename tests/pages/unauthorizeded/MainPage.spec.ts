import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../MainPage';

test('Проверка доступности элементов хедера не авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.hederHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов табов категорий не авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.categoriesTabHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов бокового меню не авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов списка добавления контента не авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов Popup уведомлений не авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationPopupList();
  await mainPage.notificationPopupHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов модального окна авторизации не авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModel();
  await mainPage.authorizationModelHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов модального регистрации не авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModel();
  await mainPage.swithToRegistrationMode();
  await mainPage.regictrationModelHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов раскрытого меню не авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuAriaHasCorrectAriaSnapshot;
});
test('Переключение темы не авторизованного пользователя', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark2021');
  await mainPage.changeThemeToWhile();
  await mainPage.checkThemeAttributeValue('white2022');
});
