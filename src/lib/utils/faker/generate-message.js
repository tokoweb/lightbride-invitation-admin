import { faker } from "@faker-js/faker";

const generateMessages = (count) => {
  const dataArray = [];

  for (let i = 0; i < count; i++) {
    const name = faker.person.fullName();
    const message = faker.lorem.sentence();

    dataArray.push({ id: i + 1, name, message });
  }

  return dataArray;
};

export default generateMessages;
