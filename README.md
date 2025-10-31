# Rutube Playwright Automation

## О проекте

Этот репозиторий — примеры end-to-end автотестов для web-платформы rutube.ru, разработанных на Playwright и TypeScript. Основная цель — покрытие ключевых пользовательских сценариев: авторизация, навигация, работа с интерфейсом, проверка корректной работы UI через снапшоты.

## Стек технологий

- **TypeScript, JavaScript**
- **Playwright**
- **Page Object Model**
- **Асинхронная обработка**
- **Git/GitHub Actions** (CI/CD для запуска тестов)
- **Docker** (опционально)

## Главные возможности

- UI автотесты для сложных сценариев (авторизация, корзина, работа с модальными окнами)
- Использование Page Object Model: структурированная архитектура и переиспользуемые компоненты
- Визуальное тестирование: проверка изменений UI через снапшоты
- Работа с антибот-защитой (stealth режим)
- Сохранение storageState для re-use авторизации

## Как запустить

1. Клонируйте репозиторий:
   ```
   git clone https://github.com/Shokk-QA/rutube-playwright-tests.git
   ```
2. Установите зависимости:
   ```
   npm install
   ```
3. Запустите тесты:
   ```
   npx playwright test
   ```
   Для запуска с определённым конфигом/фолдером:
   ```
   npx playwright test ./tests/specs
   ```

## CI/CD

- Запуск тестов реализован через GitHub Actions (см. файл `.github/workflows/ci.yml`).
- Возможна интеграция с Docker для изоляции окружения.

## Контакты

- Автор: Данил Зайцев
- Email: danil.zaithev@gmail.com
- LinkedIn/GitHub: [https://github.com/Shokk-QA](https://github.com/Shokk-QA)

---
