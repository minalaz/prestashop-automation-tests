import { test } from '../fixtures/fixtures';
import { invalidUsers, createValidRequiredUser, createValidFullUser } from '../data/signUpData';

test.describe('Sign up - positive scenarios', () => {
  test.beforeEach(async ({ signUpPage }) => {
    await signUpPage.navigate();
  });

  test('[TC-SIGNUP-001] User should be able to sign up with valid required data', async ({
    signUpPage,
  }) => {
    await signUpPage.createAccount(createValidRequiredUser());
  });

  test('[TC-SIGNUP-002] User should be able to sign up with all valid fields', async ({
    signUpPage,
  }) => {
    await signUpPage.createAccount(createValidFullUser());
  });
});

test.describe('Sign up - required field validation', () => {
  test.beforeEach(async ({ signUpPage }) => {
    await signUpPage.navigate();
  });

  test('[TC-SIGNUP-003] User should not be able to sign up without first name', async ({
    signUpPage,
  }) => {
    await signUpPage.createAccount(invalidUsers.withoutFirstName);
  });

  test('[TC-SIGNUP-004] User should not be able to sign up without last name', async ({
    signUpPage,
  }) => {
    await signUpPage.createAccount(invalidUsers.withoutLastName);
  });

  test('[TC-SIGNUP-005] User should not be able to sign up without email', async ({
    signUpPage,
  }) => {
    await signUpPage.createAccount(invalidUsers.withoutEmail);
  });

  test('[TC-SIGNUP-006] User should not be able to sign up without password', async ({
    signUpPage,
  }) => {
    await signUpPage.createAccount(invalidUsers.withoutPassword);
  });

  test('[TC-SIGNUP-007] User should not be able to sign up without accepting terms of use', async ({
    signUpPage,
  }) => {
    await signUpPage.createAccount(invalidUsers.withoutTermsAcceptance);
  });

  test('[TC-SIGNUP-008] User should not be able to sign up without accepting customer privacy consent', async ({
    signUpPage,
  }) => {
    await signUpPage.createAccount(invalidUsers.withoutPrivacyAcceptance);
  });

  test('[TC-SIGNUP-009] User should not be able to sign up with empty required form', async ({
    signUpPage,
  }) => {
    await signUpPage.createAccount(invalidUsers.emptyRequiredForm);
  });
});
test.describe('Sign up - format validation', () => {
  test.beforeEach(async ({ signUpPage }) => {
    await signUpPage.navigate();
  });

  test('[TC-SIGNUP-010] User should not be able to sign up with invalid email format', async ({
    signUpPage,
  }) => {
    await signUpPage.createAccount(invalidUsers.withInvalidEmailFormat);
  });

  test('[TC-SIGNUP-011] User should not be able to sign up with short password', async ({
    signUpPage,
  }) => {
    await signUpPage.createAccount(invalidUsers.withShortPassword);
  });

  test('[TC-SIGNUP-012] User should not be able to sign up with invalid birth date format', async ({
    signUpPage,
  }) => {
    await signUpPage.createAccount(invalidUsers.withInvalidBirthDate);
  });
});
