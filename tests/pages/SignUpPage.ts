import { expect, type FrameLocator, type Locator, type Page } from '@playwright/test';
import type { InvalidField, SignUpData } from '../data/signUpData';

export class SignUpPage {
  constructor(private page: Page) {}

  private get frame(): FrameLocator {
    return this.page.frameLocator('iframe[name="framelive"]');
  }

  private get signInTrigger(): Locator {
    return this.frame.getByLabel('Sign in');
  }

  private get createAccountLink(): Locator {
    return this.frame.getByRole('link', { name: 'Create your account' });
  }

  private get socialTitleMrRadio(): Locator {
    return this.frame.getByRole('radio', { name: 'Mr.' });
  }

  private get socialTitleMrsRadio(): Locator {
    return this.frame.getByRole('radio', { name: 'Mrs.' });
  }

  private get firstNameInput(): Locator {
    return this.frame.getByRole('textbox', {
      name: 'First name',
    });
  }

  private get lastNameInput(): Locator {
    return this.frame.getByRole('textbox', { name: 'Last name' });
  }

  private get emailInput(): Locator {
    return this.frame.getByRole('textbox', {
      name: 'Email',
      exact: true,
    });
  }

  private get passwordInput(): Locator {
    return this.frame.getByRole('textbox', { name: 'Password' });
  }

  private get birthDateInput(): Locator {
    return this.frame.getByRole('textbox', { name: 'Birthdate' });
  }

  private errorMessage(message: string): Locator {
    return this.frame.getByText(message, { exact: false });
  }

  private get receiveOffersCheckbox(): Locator {
    return this.frame.getByRole('checkbox', { name: 'Receive offers from our' });
  }

  private get newsletterCheckbox(): Locator {
    return this.frame.getByRole('checkbox', { name: 'Sign up for our newsletter' });
  }

  private get acceptTermsCheckbox(): Locator {
    return this.frame.getByRole('checkbox', {
      name: 'I agree to the terms and',
    });
  }

  private get acceptPrivacyCheckbox(): Locator {
    return this.frame.getByRole('checkbox', {
      name: 'Customer data privacy The',
    });
  }

  private get submitButton(): Locator {
    return this.frame.getByRole('button', { name: 'Create account' });
  }

  async navigate(): Promise<void> {
    await this.page.goto('/');
    await this.page.waitForLoadState('networkidle');

    await this.signInTrigger.click();
    await this.createAccountLink.click();

    await expect(this.firstNameInput).toBeVisible();
  }
  async fillForm(data: SignUpData): Promise<void> {
    if (data.socialTitle === 'Mr.') {
      await this.socialTitleMrRadio.check();
    }

    if (data.socialTitle === 'Mrs.') {
      await this.socialTitleMrsRadio.check();
    }

    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.passwordInput.fill(data.password);

    if (data.birthDate) {
      await this.birthDateInput.fill(data.birthDate);
    }

    if (data.receiveOffers) {
      await this.receiveOffersCheckbox.check();
    }

    if (data.newsletter) {
      await this.newsletterCheckbox.check();
    }

    if (data.acceptTerms) {
      await this.acceptTermsCheckbox.check();
    }

    if (data.acceptPrivacy) {
      await this.acceptPrivacyCheckbox.check();
    }
  }

  async submit(): Promise<void> {
    await this.submitButton.click();
  }
  private getFieldByName(field: InvalidField): Locator {
    const fields: Record<InvalidField, Locator> = {
      firstName: this.firstNameInput,
      lastName: this.lastNameInput,
      email: this.emailInput,
      password: this.passwordInput,
      terms: this.acceptTermsCheckbox,
      privacy: this.acceptPrivacyCheckbox,
    };

    return fields[field];
  }
  private async expectInvalidField(field: InvalidField): Promise<void> {
    const locator = this.getFieldByName(field);

    await expect(locator).toBeVisible();

    const isInvalid = await locator.evaluate((element) => element.matches(':invalid'));

    expect(isInvalid).toBeTruthy();
  }

  private async expectSuccessfulAccountCreation(data: SignUpData): Promise<void> {
    await expect(this.signInTrigger).not.toBeVisible();
    await expect(this.frame.getByText(`${data.firstName} ${data.lastName}`)).toBeVisible();
  }

  private async expectAccountCreationToFail(data: SignUpData): Promise<void> {
    await expect(this.submitButton).toBeVisible();

    if (data.expectedInvalidFields) {
      for (const field of data.expectedInvalidFields) {
        await this.expectInvalidField(field);
      }
    }

    if (data.expectedErrorMessage) {
      await expect(this.errorMessage(data.expectedErrorMessage)).toBeVisible();
    }
  }
  async createAccount(data: SignUpData): Promise<void> {
    await this.fillForm(data);
    await this.submit();

    if (data.shouldRegisterSuccessfully) {
      await this.expectSuccessfulAccountCreation(data);
    } else {
      await this.expectAccountCreationToFail(data);
    }
  }
}
