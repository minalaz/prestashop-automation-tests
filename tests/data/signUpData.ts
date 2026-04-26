import {
  generateBirthDate,
  generateEmail,
  generateFirstName,
  generateLastName,
  generatePassword,
} from '../helpers/testDataGenerator';

export type InvalidField = 'firstName' | 'lastName' | 'email' | 'password' | 'terms' | 'privacy';

export interface SignUpData {
  socialTitle?: 'Mr.' | 'Mrs.';
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthDate?: string;
  receiveOffers?: boolean;
  newsletter?: boolean;
  acceptTerms: boolean;
  acceptPrivacy: boolean;
  shouldRegisterSuccessfully: boolean;
  expectedErrorMessage?: string;
  expectedInvalidField?: InvalidField;
}

export const invalidUsers = {
  withoutFirstName: {
    firstName: '',
    lastName: generateLastName(),
    email: generateEmail(),
    password: generatePassword(),
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidField: 'firstName',
  },
  withoutLastName: {
    firstName: generateFirstName(),
    lastName: '',
    email: generateEmail(),
    password: generatePassword(),
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidField: 'lastName',
  },
  withoutEmail: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: '',
    password: generatePassword(),
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidField: 'email',
  },
  withInvalidEmailFormat: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: 'invalid-email-format',
    password: generatePassword(),
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidField: 'email',
  },
  withoutPassword: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    password: '',
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidField: 'password',
  },
  withShortPassword: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    password: '123',
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidField: 'password',
  },
  withoutTermsAcceptance: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    password: generatePassword(),
    acceptTerms: false,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidField: 'terms',
  },
  withoutPrivacyAcceptance: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    password: generatePassword(),
    acceptTerms: true,
    acceptPrivacy: false,
    shouldRegisterSuccessfully: false,
    expectedInvalidField: 'privacy',
  },
  withInvalidBirthDate: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    password: generatePassword(),
    birthDate: '99/99/9999',
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedErrorMessage: 'Format should be 05/31/1970.',
  },
} satisfies Record<string, SignUpData>;

export function createValidRequiredUser(): SignUpData {
  return {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    password: generatePassword(),
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: true,
  };
}

export function createValidFullUser(): SignUpData {
  return {
    socialTitle: 'Mrs.',
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    password: generatePassword(),
    birthDate: generateBirthDate(),
    receiveOffers: true,
    newsletter: true,
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: true,
  };
}
