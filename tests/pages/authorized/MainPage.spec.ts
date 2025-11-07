import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../MainPage';

test('Проверка доступности элементов хедера авторизованного пользователя', async ({ mainPage }) => {
  await mainPage.headerHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов Popup уведомлений авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openNotificationPopupList();
  await mainPage.notificationPopupHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов раскрытого меню авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openFullMenu();
  await mainPage.fullMenuAriaHasCorrectAriaSnapshot();
});
test('Проверка доступности элементов меню пользователя в хедере авторизованного пользователя', async ({
  mainPage,
}) => {
  await mainPage.openHeaderUserLogo();
  await mainPage.headerUserMenuHasCorrectAriaSnapshot();
});
