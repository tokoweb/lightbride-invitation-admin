import { faker } from "@faker-js/faker";

const generateUser = (count) => {
  const dataArray = [];

  for (let i = 0; i < count; i++) {
    const email = faker.internet.email();
    const domain = {
      name: faker.person.firstName(),
      href: "#",
    };
    const expired = faker.date.future();
    const status = i % 2 ? "Aktif" : "Tidak Aktif";

    dataArray.push({ id: i + 1, email, domain, expired, status });
  }

  return dataArray;
};

export default generateUser;
