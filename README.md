# PrestaShop Automation Tests

This project is a QA automation portfolio project focused on testing the PrestaShop registration/sign-up flow.

The goal of the project is to demonstrate clean and maintainable UI test automation using Playwright with TypeScript, including Page Object Model, test data separation, fixtures, cross-browser execution, environment configuration, and basic validation handling.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- dotenv
- Prettier
- GitHub Actions

## Project Structure

```text
prestashop-automation-tests/
├── tests/
│   ├── data/
│   │   └── signUpData.ts
│   ├── fixtures/
│   │   └── fixtures.ts
│   ├── helpers/
│   │   └── testDataGenerator.ts
│   ├── pages/
│   │   └── SignUpPage.ts
│   └── specs/
│       └── signup.spec.ts
├── .env.example
├── .gitignore
├── .prettierignore
├── .prettierrc
├── package.json
├── playwright.config.ts
└── README.md
```

The project is organized to keep test logic, page interactions, test data, fixtures, and helper functions separated and easier to maintain.

## Test Coverage

The current test suite focuses on the PrestaShop sign-up flow.

Covered scenarios include:

- Successful sign-up with valid required data
- Successful sign-up with all valid fields
- Sign-up without first name
- Sign-up without last name
- Sign-up without email
- Sign-up with invalid email format
- Sign-up without password
- Sign-up with short password
- Sign-up with empty form 
- Sign-up without accepting terms of use
- Sign-up without accepting customer data privacy consent
- Sign-up with invalid birth date format

The test suite covers both positive and negative scenarios, including HTML5 validation states that are visually styled by the application CSS, as well as application-level validation messages.

## Key Implementation Concepts

### Page Object Model

UI interaction logic is separated into a dedicated page class.

```text
tests/pages/SignUpPage.ts
```

This keeps test files cleaner and makes locators and page actions reusable.

### Fixtures

The project uses Playwright fixtures to initialize page objects before tests.

```text
tests/fixtures/fixtures.ts
```

This avoids repeated page object initialization inside individual test files.

### Test Data Separation

Test data is stored separately from test logic.

```text
tests/data/signUpData.ts
```

The project uses factory functions to generate fresh test data for each test execution. This helps avoid reused credentials across browser runs and repeated executions.

### Test Data Generation

Helper functions are used to generate dynamic user data such as first name, last name, email, password, and birth date.

```text
tests/helpers/testDataGenerator.ts
```

### Validation Handling

The tests handle two types of validation:

- HTML5/browser validation state, checked through the `:invalid` pseudo-class
- application-level validation messages, checked through visible error text

## Setup Instructions

### 1. Clone the repository

```bash
git clone <repository-url>
cd prestashop-automation-tests
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Playwright browsers

```bash
npx playwright install
```

### 4. Create environment file

Create a `.env` file in the project root.

You can use `.env.example` as a template:

```env
BASE_URL=https://demo.prestashop.com/#/en/front
DEFAULT_TIMEOUT=30000
EXPECT_TIMEOUT=5000
```

The real `.env` file is ignored by Git.

## Running Tests

Run all tests:

```bash
npm run test
```

Run tests in headed mode:

```bash
npm run test:headed
```

Run tests in a specific browser:

```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
```

Run a specific test file:

```bash
npx playwright test tests/specs/signup.spec.ts
```

Run tests by title or test case ID:

```bash
npx playwright test -g "TC-SIGNUP-001"
```

## Reports and Debugging Artifacts

After test execution, the Playwright HTML report can be opened with:

```bash
npm run report
```

The project is configured to keep useful debugging artifacts:

- screenshots on failure
- video on failure
- trace on first retry

These artifacts help investigate failed or flaky test executions.

## Notes About Test Stability

The tested application is a public PrestaShop demo environment, so occasional slowness or flaky behavior may happen due to external factors.

To improve test stability, the project uses:

- fresh test data generated for each test execution
- Playwright auto-waiting mechanisms
- page object methods that wait for key elements before interacting with the form
- retry configuration for CI execution

No account cleanup is performed because the tested application is a public demo environment and does not provide a stable cleanup mechanism for created accounts.

## Continuous Integration

The project includes a GitHub Actions workflow for running Playwright tests automatically and manually.

The workflow is triggered on:

- push to the `main` branch
- pull request targeting the `main` branch
- manual execution from the GitHub Actions tab

The CI pipeline:

- checks out the repository
- sets up Node.js
- installs project dependencies
- installs Playwright browsers
- runs the test suite
- uploads the Playwright HTML report as an artifact

Environment-specific values are provided through GitHub Repository Secrets.

## Environment Variables

The project uses environment variables for configuration values.

```env
BASE_URL=https://demo.prestashop.com/#/en/front
DEFAULT_TIMEOUT=30000
EXPECT_TIMEOUT=5000
```

The `.env` file is used for local execution and is ignored by Git.

The `.env.example` file is included in the repository as a template for required environment variables.

## Learning Support

AI assistance was used during this project as a learning support tool for discussing structure, refactoring options, Playwright concepts, and test design decisions.

The test scenarios, implementation, debugging, locator selection, and final code decisions were reviewed and applied by me.

## Author

Created by **Mina** as a QA automation portfolio project.
