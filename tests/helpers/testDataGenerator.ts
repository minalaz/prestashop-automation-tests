//Test data pools used for generating random user information
const firstNames = ['Vanja', 'Sasa', 'Luka', 'Anrdrea', 'Mika'];
const lastNames = ['Petrovic', 'Jovanovic', 'Maric', 'Saric', 'Milanovic'];

//Returns a random item from the provided array
function getRandomItem(items: string[]): string {
  return items[Math.floor(Math.random() * items.length)];
}
//Generates a random social title
export function generateSocialTitle(): 'Mr.' | 'Mrs.' {
  return Math.random() < 0.5 ? 'Mr.' : 'Mrs.';
}
//Generates a random first name from the predefined list
export function generateFirstName(): string {
  return getRandomItem(firstNames);
}
//Generates a random last name from the predefined list
export function generateLastName(): string {
  return getRandomItem(lastNames);
}
//Generates a unique email address
export function generateEmail(): string {
  return `test.user.${Date.now()}@example.com`;
}
//Generates a password that satisfies requirements
export function generatePassword(): string {
  return `Pass${Date.now()}!`;
}
//Generates a valid birth date value
export function generateBirthDate(): string {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 80;
  const maxYear = currentYear - 18;
  const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1;
  const mm = String(month).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${mm}/${dd}/${year}`;
}
