import { test, expect } from '../../fixtures/fixtures';

test('Проверка доступности элементов хедера неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов табов категорий неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.categoriesTabHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов бокового меню неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.menuHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов списка добавления контента неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAddPopupList();
  await mainPage.addPopupListHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов Popup уведомлений неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationPopupList();
  await mainPage.notificationPopupHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов модального окна авторизации неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModel();
  await mainPage.authorizationModelHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов модального регистрации неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openAuthorizationModel();
  await mainPage.switchToRegistrationMode();
  await mainPage.registrationModelHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов раскрытого меню неавторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuAriaHasCorrectAriaSnapshot();
});
test('Переключение темы неавторизованного пользователя', async ({ mainPage }) => {
  await mainPage.checkThemeAttributeValue('dark2021');
  await mainPage.changeThemeToWhite();
  await mainPage.checkThemeAttributeValue('white2022');
});
