const firstNames = ['Petar', 'Jovan', 'Marija', 'Sanja', 'Milan'];
const lastNames = ['Petrovic', 'Jovanovic', 'Maric', 'Saric', 'Milanovic'];

function getRandomItem(items: string[]): string {
  return items[Math.floor(Math.random() * items.length)];
}

export function generateFirstName(): string {
  return getRandomItem(firstNames);
}

export function generateLastName(): string {
  return getRandomItem(lastNames);
}

export function generateEmail(): string {
  return `test.user.${Date.now()}@example.com`;
}

export function generatePassword(): string {
  return `Pass${Date.now()}!`;
}

export function generateBirthDate(): string {
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 80;
  const maxYear = currentYear - 18;
  const year = Math.floor(Math.random() * (maxYear - minYear + 1)) + minYear;
  const month = Math.floor(Math.random() * 12) + 1;
  const day = Math.floor(Math.random() * 28) + 1; // max 28 - sigurno validan dan u svakom mesecu
  const mm = String(month).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${mm}/${dd}/${year}`;
}
