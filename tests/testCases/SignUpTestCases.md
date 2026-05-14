# Sign Up Test Cases

## Sign Up - Positive Scenarios

## TC-SIGNUP-001: User should be able to sign up with valid required data

**Priority:** High  
**Type:** Positive  
**Area:** Registration / Sign up  
**Automation status:** Automated

### Preconditions

- PrestaShop demo front office should be available.
- User should not be signed in.
- Registration page should be accessible.
- Test data should contain valid required registration values.
- Email address used for registration should be unique for the current test run.

### Test Data

| Field                 | Value                                    |
| --------------------- | ---------------------------------------- |
| Social title          | Valid value, for example `Mr.` or `Mrs.` |
| First name            | Valid generated first name               |
| Last name             | Valid generated last name                |
| Email                 | Unique generated email address           |
| Password              | Valid generated password                 |
| Terms and conditions  | Checked                                  |
| Customer data privacy | Checked                                  |

### Steps

| Step | Action                                  | Expected Result                                              |
| ---- | --------------------------------------- | ------------------------------------------------------------ |
| 1    | Open the PrestaShop demo homepage.      | Homepage should be successfully loaded.                      |
| 2    | Open the sign-in section.               | Sign-in options should be displayed.                         |
| 3    | Click the create account option.        | Registration form should be displayed.                       |
| 4    | Enter valid required registration data. | All required input fields should contain the entered values. |
| 5    | Select required consent checkboxes.     | Required consent checkboxes should be selected.              |
| 6    | Submit the registration form.           | Registration request should be submitted successfully.       |
| 7    | Verify successful account creation.     | User should be registered and signed in successfully.        |
| 8    | Verify signed-in user display.          | User full name should be visible in the header/account area. |

### Expected Result

User should be able to create an account using valid required registration data.  
After successful registration, the user should be signed in and their full name should be visible.

## TC-SIGNUP-002: User should be able to sign up with all valid fields

**Priority:** High  
**Type:** Positive  
**Area:** Registration / Sign up  
**Automation status:** Automated

### Preconditions

- PrestaShop demo front office should be available.
- User should not be signed in.
- Registration page should be accessible.
- Test data should contain valid required and optional registration values.
- Email address used for registration should be unique for the current test run.

### Test Data

| Field                        | Value                                    |
| ---------------------------- | ---------------------------------------- |
| Social title                 | Valid value, for example `Mr.` or `Mrs.` |
| First name                   | Valid generated first name               |
| Last name                    | Valid generated last name                |
| Email                        | Unique generated email address           |
| Password                     | Valid generated password                 |
| Birth date                   | Valid generated birth date               |
| Receive offers from partners | Checked                                  |
| Sign up for newsletter       | Checked                                  |
| Terms and conditions         | Checked                                  |
| Customer data privacy        | Checked                                  |

### Steps

| Step | Action                                     | Expected Result                                              |
| ---- | ------------------------------------------ | ------------------------------------------------------------ |
| 1    | Open the PrestaShop demo homepage.         | Homepage should be successfully loaded.                      |
| 2    | Open the sign-in section.                  | Sign-in options should be displayed.                         |
| 3    | Click the create account option.           | Registration form should be displayed.                       |
| 4    | Select a valid social title.               | Selected social title should be checked.                     |
| 5    | Enter a valid first name.                  | First name field should contain the entered value.           |
| 6    | Enter a valid last name.                   | Last name field should contain the entered value.            |
| 7    | Enter a unique valid email address.        | Email field should contain the entered value.                |
| 8    | Enter a valid password.                    | Password field should contain the entered value.             |
| 9    | Enter a valid birth date.                  | Birth date field should contain the entered value.           |
| 10   | Select the partner offers checkbox.        | Partner offers checkbox should be checked.                   |
| 11   | Select the newsletter checkbox.            | Newsletter checkbox should be checked.                       |
| 12   | Select the terms and conditions checkbox.  | Terms and conditions checkbox should be checked.             |
| 13   | Select the customer data privacy checkbox. | Customer data privacy checkbox should be checked.            |
| 14   | Submit the registration form.              | Registration request should be submitted successfully.       |
| 15   | Verify successful account creation.        | User should be registered and signed in successfully.        |
| 16   | Verify signed-in user display.             | User full name should be visible in the header/account area. |

### Expected Result

User should be able to create an account using all valid required and optional registration data.  
After successful registration, the user should be signed in and their full name should be visible.

---

## Sign Up - Required Field Validation Scenarios

## TC-SIGNUP-003: User should not be able to sign up without first name

**Priority:** High  
**Type:** Negative  
**Area:** Registration / Sign up  
**Automation status:** Automated

### Preconditions

- PrestaShop demo front office should be available.
- User should not be signed in.
- Registration page should be accessible.
- Test data should contain valid registration values except first name.
- Email address used for registration should be unique for the current test run.

### Test Data

| Field                 | Value                                    |
| --------------------- | ---------------------------------------- |
| Social title          | Valid value, for example `Mr.` or `Mrs.` |
| First name            | Empty                                    |
| Last name             | Valid generated last name                |
| Email                 | Unique generated email address           |
| Password              | Valid generated password                 |
| Terms and conditions  | Checked                                  |
| Customer data privacy | Checked                                  |

### Steps

| Step | Action                                     | Expected Result                                            |
| ---- | ------------------------------------------ | ---------------------------------------------------------- |
| 1    | Open the PrestaShop demo homepage.         | Homepage should be successfully loaded.                    |
| 2    | Open the sign-in section.                  | Sign-in options should be displayed.                       |
| 3    | Click the create account option.           | Registration form should be displayed.                     |
| 4    | Select a valid social title.               | Selected social title should be checked.                   |
| 5    | Leave the first name field empty.          | First name field should remain empty.                      |
| 6    | Enter a valid last name.                   | Last name field should contain the entered value.          |
| 7    | Enter a unique valid email address.        | Email field should contain the entered value.              |
| 8    | Enter a valid password.                    | Password field should contain the entered value.           |
| 9    | Select the terms and conditions checkbox.  | Terms and conditions checkbox should be checked.           |
| 10   | Select the customer data privacy checkbox. | Customer data privacy checkbox should be checked.          |
| 11   | Submit the registration form.              | Registration request should be blocked by form validation. |
| 12   | Verify first name field validation state.  | First name field should be marked as invalid.              |
| 13   | Verify that account is not created.        | User should remain on the registration form.               |

### Expected Result

User should not be able to create an account without entering first name.  
First name field should be marked as invalid and the user should remain on the registration form.

## TC-SIGNUP-004: User should not be able to sign up without last name

**Priority:** High  
**Type:** Negative  
**Area:** Registration / Sign up  
**Automation status:** Automated

### Preconditions

- PrestaShop demo front office should be available.
- User should not be signed in.
- Registration page should be accessible.
- Test data should contain valid registration values except last name.
- Email address used for registration should be unique for the current test run.

### Test Data

| Field                 | Value                                    |
| --------------------- | ---------------------------------------- |
| Social title          | Valid value, for example `Mr.` or `Mrs.` |
| First name            | Valid generated first name               |
| Last name             | Empty                                    |
| Email                 | Unique generated email address           |
| Password              | Valid generated password                 |
| Terms and conditions  | Checked                                  |
| Customer data privacy | Checked                                  |

### Steps

| Step | Action                                     | Expected Result                                            |
| ---- | ------------------------------------------ | ---------------------------------------------------------- |
| 1    | Open the PrestaShop demo homepage.         | Homepage should be successfully loaded.                    |
| 2    | Open the sign-in section.                  | Sign-in options should be displayed.                       |
| 3    | Click the create account option.           | Registration form should be displayed.                     |
| 4    | Select a valid social title.               | Selected social title should be checked.                   |
| 5    | Enter a valid first name.                  | First name field should contain the entered value.         |
| 6    | Leave the last name field empty.           | Last name field should remain empty.                       |
| 7    | Enter a unique valid email address.        | Email field should contain the entered value.              |
| 8    | Enter a valid password.                    | Password field should contain the entered value.           |
| 9    | Select the terms and conditions checkbox.  | Terms and conditions checkbox should be checked.           |
| 10   | Select the customer data privacy checkbox. | Customer data privacy checkbox should be checked.          |
| 11   | Submit the registration form.              | Registration request should be blocked by form validation. |
| 12   | Verify last name field validation state.   | Last name field should be marked as invalid.               |
| 13   | Verify that account is not created.        | User should remain on the registration form.               |

### Expected Result

User should not be able to create an account without entering last name.  
Last name field should be marked as invalid and the user should remain on the registration form.

## TC-SIGNUP-005: User should not be able to sign up without email

**Priority:** High  
**Type:** Negative  
**Area:** Registration / Sign up  
**Automation status:** Automated

### Preconditions

- PrestaShop demo front office should be available.
- User should not be signed in.
- Registration page should be accessible.
- Test data should contain valid registration values except email.

### Test Data

| Field                 | Value                                    |
| --------------------- | ---------------------------------------- |
| Social title          | Valid value, for example `Mr.` or `Mrs.` |
| First name            | Valid generated first name               |
| Last name             | Valid generated last name                |
| Email                 | Empty                                    |
| Password              | Valid generated password                 |
| Terms and conditions  | Checked                                  |
| Customer data privacy | Checked                                  |

### Steps

| Step | Action                                     | Expected Result                                            |
| ---- | ------------------------------------------ | ---------------------------------------------------------- |
| 1    | Open the PrestaShop demo homepage.         | Homepage should be successfully loaded.                    |
| 2    | Open the sign-in section.                  | Sign-in options should be displayed.                       |
| 3    | Click the create account option.           | Registration form should be displayed.                     |
| 4    | Select a valid social title.               | Selected social title should be checked.                   |
| 5    | Enter a valid first name.                  | First name field should contain the entered value.         |
| 6    | Enter a valid last name.                   | Last name field should contain the entered value.          |
| 7    | Leave the email field empty.               | Email field should remain empty.                           |
| 8    | Enter a valid password.                    | Password field should contain the entered value.           |
| 9    | Select the terms and conditions checkbox.  | Terms and conditions checkbox should be checked.           |
| 10   | Select the customer data privacy checkbox. | Customer data privacy checkbox should be checked.          |
| 11   | Submit the registration form.              | Registration request should be blocked by form validation. |
| 12   | Verify email field validation state.       | Email field should be marked as invalid.                   |
| 13   | Verify that account is not created.        | User should remain on the registration form.               |

### Expected Result

User should not be able to create an account without entering email.  
Email field should be marked as invalid and the user should remain on the registration form.

## TC-SIGNUP-006: User should not be able to sign up without password

**Priority:** High  
**Type:** Negative  
**Area:** Registration / Sign up  
**Automation status:** Automated

### Preconditions

- PrestaShop demo front office should be available.
- User should not be signed in.
- Registration page should be accessible.
- Test data should contain valid registration values except password.
- Email address used for registration should be unique for the current test run.

### Test Data

| Field                 | Value                                    |
| --------------------- | ---------------------------------------- |
| Social title          | Valid value, for example `Mr.` or `Mrs.` |
| First name            | Valid generated first name               |
| Last name             | Valid generated last name                |
| Email                 | Unique generated email address           |
| Password              | Empty                                    |
| Terms and conditions  | Checked                                  |
| Customer data privacy | Checked                                  |

### Steps

| Step | Action                                     | Expected Result                                            |
| ---- | ------------------------------------------ | ---------------------------------------------------------- |
| 1    | Open the PrestaShop demo homepage.         | Homepage should be successfully loaded.                    |
| 2    | Open the sign-in section.                  | Sign-in options should be displayed.                       |
| 3    | Click the create account option.           | Registration form should be displayed.                     |
| 4    | Select a valid social title.               | Selected social title should be checked.                   |
| 5    | Enter a valid first name.                  | First name field should contain the entered value.         |
| 6    | Enter a valid last name.                   | Last name field should contain the entered value.          |
| 7    | Enter a unique valid email address.        | Email field should contain the entered value.              |
| 8    | Leave the password field empty.            | Password field should remain empty.                        |
| 9    | Select the terms and conditions checkbox.  | Terms and conditions checkbox should be checked.           |
| 10   | Select the customer data privacy checkbox. | Customer data privacy checkbox should be checked.          |
| 11   | Submit the registration form.              | Registration request should be blocked by form validation. |
| 12   | Verify password field validation state.    | Password field should be marked as invalid.                |
| 13   | Verify that account is not created.        | User should remain on the registration form.               |

### Expected Result

User should not be able to create an account without entering password.  
Password field should be marked as invalid and the user should remain on the registration form.

## TC-SIGNUP-007: User should not be able to sign up without accepting terms of use

**Priority:** High  
**Type:** Negative  
**Area:** Registration / Sign up  
**Automation status:** Automated

### Preconditions

- PrestaShop demo front office should be available.
- User should not be signed in.
- Registration page should be accessible.
- Test data should contain valid registration values except accepted terms of use.
- Email address used for registration should be unique for the current test run.

### Test Data

| Field                 | Value                                    |
| --------------------- | ---------------------------------------- |
| Social title          | Valid value, for example `Mr.` or `Mrs.` |
| First name            | Valid generated first name               |
| Last name             | Valid generated last name                |
| Email                 | Unique generated email address           |
| Password              | Valid generated password                 |
| Terms and conditions  | Unchecked                                |
| Customer data privacy | Checked                                  |

### Steps

| Step | Action                                             | Expected Result                                                  |
| ---- | -------------------------------------------------- | ---------------------------------------------------------------- |
| 1    | Open the PrestaShop demo homepage.                 | Homepage should be successfully loaded.                          |
| 2    | Open the sign-in section.                          | Sign-in options should be displayed.                             |
| 3    | Click the create account option.                   | Registration form should be displayed.                           |
| 4    | Select a valid social title.                       | Selected social title should be checked.                         |
| 5    | Enter a valid first name.                          | First name field should contain the entered value.               |
| 6    | Enter a valid last name.                           | Last name field should contain the entered value.                |
| 7    | Enter a unique valid email address.                | Email field should contain the entered value.                    |
| 8    | Enter a valid password.                            | Password field should contain the entered value.                 |
| 9    | Leave the terms and conditions checkbox unchecked. | Terms and conditions checkbox should remain unchecked.           |
| 10   | Select the customer data privacy checkbox.         | Customer data privacy checkbox should be checked.                |
| 11   | Submit the registration form.                      | Registration request should be blocked by form validation.       |
| 12   | Verify terms and conditions validation state.      | Terms and conditions checkbox/label should be marked as invalid. |
| 13   | Verify that account is not created.                | User should remain on the registration form.                     |

### Expected Result

User should not be able to create an account without accepting terms of use.  
Terms and conditions consent should be marked as invalid and the user should remain on the registration form.

## TC-SIGNUP-008: User should not be able to sign up without accepting customer privacy consent

**Priority:** High  
**Type:** Negative  
**Area:** Registration / Sign up  
**Automation status:** Automated

### Preconditions

- PrestaShop demo front office should be available.
- User should not be signed in.
- Registration page should be accessible.
- Test data should contain valid registration values except accepted customer privacy consent.
- Email address used for registration should be unique for the current test run.

### Test Data

| Field                 | Value                                    |
| --------------------- | ---------------------------------------- |
| Social title          | Valid value, for example `Mr.` or `Mrs.` |
| First name            | Valid generated first name               |
| Last name             | Valid generated last name                |
| Email                 | Unique generated email address           |
| Password              | Valid generated password                 |
| Terms and conditions  | Checked                                  |
| Customer data privacy | Unchecked                                |

### Steps

| Step | Action                                              | Expected Result                                                   |
| ---- | --------------------------------------------------- | ----------------------------------------------------------------- |
| 1    | Open the PrestaShop demo homepage.                  | Homepage should be successfully loaded.                           |
| 2    | Open the sign-in section.                           | Sign-in options should be displayed.                              |
| 3    | Click the create account option.                    | Registration form should be displayed.                            |
| 4    | Select a valid social title.                        | Selected social title should be checked.                          |
| 5    | Enter a valid first name.                           | First name field should contain the entered value.                |
| 6    | Enter a valid last name.                            | Last name field should contain the entered value.                 |
| 7    | Enter a unique valid email address.                 | Email field should contain the entered value.                     |
| 8    | Enter a valid password.                             | Password field should contain the entered value.                  |
| 9    | Select the terms and conditions checkbox.           | Terms and conditions checkbox should be checked.                  |
| 10   | Leave the customer data privacy checkbox unchecked. | Customer data privacy checkbox should remain unchecked.           |
| 11   | Submit the registration form.                       | Registration request should be blocked by form validation.        |
| 12   | Verify customer data privacy validation state.      | Customer data privacy checkbox/label should be marked as invalid. |
| 13   | Verify that account is not created.                 | User should remain on the registration form.                      |

### Expected Result

User should not be able to create an account without accepting customer privacy consent.  
Customer data privacy consent should be marked as invalid and the user should remain on the registration form.

## TC-SIGNUP-009: User should not be able to sign up with empty required form

**Priority:** High  
**Type:** Negative  
**Area:** Registration / Sign up  
**Automation status:** Automated

### Preconditions

- PrestaShop demo front office should be available.
- User should not be signed in.
- Registration page should be accessible.
- Registration form should be displayed.

### Test Data

| Field                 | Value        |
| --------------------- | ------------ |
| Social title          | Not selected |
| First name            | Empty        |
| Last name             | Empty        |
| Email                 | Empty        |
| Password              | Empty        |
| Terms and conditions  | Unchecked    |
| Customer data privacy | Unchecked    |

### Steps

| Step | Action                                          | Expected Result                                                 |
| ---- | ----------------------------------------------- | --------------------------------------------------------------- |
| 1    | Open the PrestaShop demo homepage.              | Homepage should be successfully loaded.                         |
| 2    | Open the sign-in section.                       | Sign-in options should be displayed.                            |
| 3    | Click the create account option.                | Registration form should be displayed.                          |
| 4    | Leave social title unselected.                  | No social title should be selected.                             |
| 5    | Leave first name field empty.                   | First name field should remain empty.                           |
| 6    | Leave last name field empty.                    | Last name field should remain empty.                            |
| 7    | Leave email field empty.                        | Email field should remain empty.                                |
| 8    | Leave password field empty.                     | Password field should remain empty.                             |
| 9    | Leave terms and conditions checkbox unchecked.  | Terms and conditions checkbox should remain unchecked.          |
| 10   | Leave customer data privacy checkbox unchecked. | Customer data privacy checkbox should remain unchecked.         |
| 11   | Submit the registration form.                   | Registration request should be blocked by form validation.      |
| 12   | Verify required input field validation states.  | Required input fields should be marked as invalid.              |
| 13   | Verify required consent validation states.      | Required consent checkboxes/labels should be marked as invalid. |
| 14   | Verify that account is not created.             | User should remain on the registration form.                    |

### Expected Result

User should not be able to create an account when the required registration form is submitted empty.  
Required input fields and required consent checkboxes should be marked as invalid, and the user should remain on the registration form.

---

## Sign up - format validation

## TC-SIGNUP-010: User should not be able to sign up with invalid email format

**Priority:** High  
**Type:** Negative  
**Area:** Registration / Sign up  
**Automation status:** Automated

### Preconditions

- PrestaShop demo front office should be available.
- User should not be signed in.
- Registration page should be accessible.
- Test data should contain valid registration values except email format.

### Test Data

| Field                 | Value                                             |
| --------------------- | ------------------------------------------------- |
| Social title          | Valid value, for example `Mr.` or `Mrs.`          |
| First name            | Valid generated first name                        |
| Last name             | Valid generated last name                         |
| Email                 | Invalid email format, for example `invalid-email` |
| Password              | Valid generated password                          |
| Terms and conditions  | Checked                                           |
| Customer data privacy | Checked                                           |

### Steps

| Step | Action                                     | Expected Result                                            |
| ---- | ------------------------------------------ | ---------------------------------------------------------- |
| 1    | Open the PrestaShop demo homepage.         | Homepage should be successfully loaded.                    |
| 2    | Open the sign-in section.                  | Sign-in options should be displayed.                       |
| 3    | Click the create account option.           | Registration form should be displayed.                     |
| 4    | Select a valid social title.               | Selected social title should be checked.                   |
| 5    | Enter a valid first name.                  | First name field should contain the entered value.         |
| 6    | Enter a valid last name.                   | Last name field should contain the entered value.          |
| 7    | Enter an invalid email format.             | Email field should contain the entered invalid value.      |
| 8    | Enter a valid password.                    | Password field should contain the entered value.           |
| 9    | Select the terms and conditions checkbox.  | Terms and conditions checkbox should be checked.           |
| 10   | Select the customer data privacy checkbox. | Customer data privacy checkbox should be checked.          |
| 11   | Submit the registration form.              | Registration request should be blocked by form validation. |
| 12   | Verify email field validation state.       | Email field should be marked as invalid.                   |
| 13   | Verify that account is not created.        | User should remain on the registration form.               |

### Expected Result

User should not be able to create an account with an invalid email format.  
Email field should be marked as invalid and the user should remain on the registration form.

## TC-SIGNUP-011: User should not be able to sign up with short password

**Priority:** High  
**Type:** Negative  
**Area:** Registration / Sign up  
**Automation status:** Automated

### Preconditions

- PrestaShop demo front office should be available.
- User should not be signed in.
- Registration page should be accessible.
- Test data should contain valid registration values except password length.
- Email address used for registration should be unique for the current test run.

### Test Data

| Field                 | Value                                    |
| --------------------- | ---------------------------------------- |
| Social title          | Valid value, for example `Mr.` or `Mrs.` |
| First name            | Valid generated first name               |
| Last name             | Valid generated last name                |
| Email                 | Unique generated email address           |
| Password              | Short password, for example `1234`       |
| Terms and conditions  | Checked                                  |
| Customer data privacy | Checked                                  |

### Steps

| Step | Action                                     | Expected Result                                            |
| ---- | ------------------------------------------ | ---------------------------------------------------------- |
| 1    | Open the PrestaShop demo homepage.         | Homepage should be successfully loaded.                    |
| 2    | Open the sign-in section.                  | Sign-in options should be displayed.                       |
| 3    | Click the create account option.           | Registration form should be displayed.                     |
| 4    | Select a valid social title.               | Selected social title should be checked.                   |
| 5    | Enter a valid first name.                  | First name field should contain the entered value.         |
| 6    | Enter a valid last name.                   | Last name field should contain the entered value.          |
| 7    | Enter a unique valid email address.        | Email field should contain the entered value.              |
| 8    | Enter a short password.                    | Password field should contain the entered short value.     |
| 9    | Select the terms and conditions checkbox.  | Terms and conditions checkbox should be checked.           |
| 10   | Select the customer data privacy checkbox. | Customer data privacy checkbox should be checked.          |
| 11   | Submit the registration form.              | Registration request should be blocked by form validation. |
| 12   | Verify password field validation state.    | Password field should be marked as invalid.                |
| 13   | Verify that account is not created.        | User should remain on the registration form.               |

### Expected Result

User should not be able to create an account with a password shorter than the required minimum length.  
Password field should be marked as invalid and the user should remain on the registration form.

## TC-SIGNUP-012: User should not be able to sign up with invalid birth date format

**Priority:** Medium  
**Type:** Negative  
**Area:** Registration / Sign up  
**Automation status:** Automated

### Preconditions

- PrestaShop demo front office should be available.
- User should not be signed in.
- Registration page should be accessible.
- Test data should contain valid registration values except birth date format.
- Email address used for registration should be unique for the current test run.

### Test Data

| Field                 | Value                                    |
| --------------------- | ---------------------------------------- |
| Social title          | Valid value, for example `Mr.` or `Mrs.` |
| First name            | Valid generated first name               |
| Last name             | Valid generated last name                |
| Email                 | Unique generated email address           |
| Password              | Valid generated password                 |
| Birth date            | Invalid birth date format                |
| Terms and conditions  | Checked                                  |
| Customer data privacy | Checked                                  |

### Steps

| Step | Action                                     | Expected Result                                            |
| ---- | ------------------------------------------ | ---------------------------------------------------------- |
| 1    | Open the PrestaShop demo homepage.         | Homepage should be successfully loaded.                    |
| 2    | Open the sign-in section.                  | Sign-in options should be displayed.                       |
| 3    | Click the create account option.           | Registration form should be displayed.                     |
| 4    | Select a valid social title.               | Selected social title should be checked.                   |
| 5    | Enter a valid first name.                  | First name field should contain the entered value.         |
| 6    | Enter a valid last name.                   | Last name field should contain the entered value.          |
| 7    | Enter a unique valid email address.        | Email field should contain the entered value.              |
| 8    | Enter a valid password.                    | Password field should contain the entered value.           |
| 9    | Enter an invalid birth date format.        | Birth date validation message should be displayed.         |
| 10   | Select the terms and conditions checkbox.  | Terms and conditions checkbox should be checked.           |
| 11   | Select the customer data privacy checkbox. | Customer data privacy checkbox should be checked.          |
| 12   | Submit the registration form.              | Registration request should be blocked by form validation. |
| 13   | Verify birth date validation message.      | Birth date error message should be visible.                |
| 14   | Verify that account is not created.        | User should remain on the registration form.               |

### Expected Result

User should not be able to create an account with an invalid birth date format.  
Birth date validation message should be displayed and the user should remain on the registration form.
