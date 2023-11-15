import { faker } from "@faker-js/faker";

const generateVisitor = (count) => {
  const dataArray = [];

  for (let i = 0; i < count; i++) {
    const name = faker.person.fullName();
    const date = faker.date.past();

    dataArray.push({ id: i + 1, name, date });
  }

  return dataArray;
};

export default generateVisitor;
