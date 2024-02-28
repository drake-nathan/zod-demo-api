import { faker } from "@faker-js/faker";

interface User {
  email: string;
  favoriteColor: string;
  id: number;
  name: string;
  phone: string;
  tailwind: "hate" | "love";
  zodiac?: string;
}

const createFakeUser = (id: number): User => ({
  email: faker.internet.email(),
  favoriteColor: faker.color.rgb(),
  id,
  name: faker.person.fullName().toLowerCase(),
  phone: faker.phone.number(),
  tailwind: Math.random() < 0.5 ? "love" : "hate",
  ...(Math.random() < 0.5 ?
    { zodiac: faker.person.zodiacSign() }
  : {}),
});

export const generateUsers = (amount: number): User[] => {
  const users: User[] = [
    {
      email: faker.internet.email(),
      favoriteColor: faker.color.rgb(),
      id: 0,
      name: faker.person.fullName().toLowerCase(),
      phone: faker.phone.number(),
      tailwind: "love",
      zodiac: faker.person.zodiacSign(),
    },
  ];

  for (let i = 1; i < amount; i++) {
    users.push(createFakeUser(i));
  }

  return users;
};
