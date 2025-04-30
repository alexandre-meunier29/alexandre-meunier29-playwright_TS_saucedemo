# Playwright TS SauceDemo Automation Framework

This repository contains an end-to-end test automation framework built with Playwright and TypeScript for testing the [SauceDemo](https://www.saucedemo.com/) web application. The framework follows the Page Object Model (POM) design pattern to create maintainable and scalable automated tests.

## Features

- TypeScript implementation for type safety
- Page Object Model architecture
- Robust test data management
- Allure reporting integration
- CI/CD integration with GitHub Actions
- Cross-browser testing support

## Prerequisites

To run the tests, you need to have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/alexandre-meunier29/alexandre-meunier29-playwright_TS_saucedemo.git
cd alexandre-meunier29-playwright_TS_saucedemo
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Project Structure

```
├── pageobjects/             # Page Object classes
│   ├── CalendarPage.ts
│   ├── CartPage.ts
│   ├── CheckoutStep1Page.ts
│   ├── CheckoutStep2Page.ts
│   ├── LoginPage.ts
│   ├── POManager.ts         # Page Object Manager
│   ├── ProductDetailPage.ts
│   ├── ProductListingPage.ts
│   └── SuccessPage.ts
├── tests/                   # Test files
│   ├── Calendar.spec.ts
│   ├── Cart.spec.ts
│   ├── Login.spec.ts
│   └── UserJourneyTest.spec.ts
├── utils/                   # Utility files
│   └── UserData.json        # Test data
├── playwright.config.ts     # Playwright configuration
├── package.json             # Project dependencies
└── README.md                # Project documentation
```

## Page Object Pattern

The framework implements the Page Object Model pattern to separate test logic from page-specific interactions:

- Each page of the application has its own page object class
- `POManager.ts` serves as a factory for all page objects
- Page objects encapsulate locators and provide methods for page interactions
- Assertions are included within page objects for complete encapsulation

## Running Tests

### Run all tests:

```bash
npx playwright test
```

### Run a specific test file:

```bash
npx playwright test tests/Login.spec.ts
```

### Run tests in a specific browser:

```bash
npx playwright test --project=chromium
```

### Run tests in UI mode:

```bash
npx playwright test --ui
```

### Run tests with Allure reporting:

```bash
npx playwright test
npx allure generate allure-results --clean
npx allure open allure-report
```

## Test Data Management

Test data is stored in JSON format in the `utils/UserData.json` file. This approach allows for easy maintenance and updates to test data without modifying the test code.

## Continuous Integration

The project includes GitHub Actions workflow configuration that automatically runs tests on push to main/master branch or on pull requests.

## Key Implementation Details

### POManager

The Page Object Manager pattern is used to create and manage page objects. This centralizes page object instantiation and provides a clean API for tests to access page objects.

### Price Consistency Testing

The framework includes tests for verifying price consistency throughout the user journey, ensuring that product prices remain the same from product listing to checkout.

### Calendar Testing

The framework demonstrates testing complex UI elements like date pickers.

### Assertions

Assertions are encapsulated within page objects, making tests more readable and maintainable.

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License.