import {
  generateBirthDate,
  generateEmail,
  generateFirstName,
  generateLastName,
  generatePassword,
  generateSocialTitle,
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
  acceptTerms: boolean;
  newsletter?: boolean;
  acceptPrivacy: boolean;
  shouldRegisterSuccessfully: boolean;
  expectedErrorMessage?: string;
  expectedInvalidFields?: InvalidField[];
}
//Invalid regsitration form scenarios
export const invalidUsers = {
  withoutFirstName: {
    firstName: '',
    lastName: generateLastName(),
    email: generateEmail(),
    password: generatePassword(),
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidFields: ['firstName'],
  },
  withoutLastName: {
    firstName: generateFirstName(),
    lastName: '',
    email: generateEmail(),
    password: generatePassword(),
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidFields: ['lastName'],
  },
  withoutEmail: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: '',
    password: generatePassword(),
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidFields: ['email'],
  },
  withInvalidEmailFormat: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: 'invalid-email-format',
    password: generatePassword(),
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidFields: ['email'],
  },
  withoutPassword: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    password: '',
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidFields: ['password'],
  },
  withShortPassword: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    password: '123',
    acceptTerms: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidFields: ['password'],
  },
  withoutTermsAcceptance: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    password: generatePassword(),
    acceptTerms: false,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: false,
    expectedInvalidFields: ['terms'],
  },
  withoutPrivacyAcceptance: {
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    password: generatePassword(),
    acceptTerms: true,
    acceptPrivacy: false,
    shouldRegisterSuccessfully: false,
    expectedInvalidFields: ['privacy'],
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
  emptyRequiredForm: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    acceptTerms: false,
    acceptPrivacy: false,
    shouldRegisterSuccessfully: false,
    expectedInvalidFields: ['firstName', 'lastName', 'email', 'password', 'terms', 'privacy'],
  },
} satisfies Record<string, SignUpData>;
//Valid required user data
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
//Valid full user data
export function createValidFullUser(): SignUpData {
  return {
    socialTitle: generateSocialTitle(),
    firstName: generateFirstName(),
    lastName: generateLastName(),
    email: generateEmail(),
    password: generatePassword(),
    birthDate: generateBirthDate(),
    receiveOffers: true,
    acceptTerms: true,
    newsletter: true,
    acceptPrivacy: true,
    shouldRegisterSuccessfully: true,
  };
}
