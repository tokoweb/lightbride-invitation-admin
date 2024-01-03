import { faker } from "@faker-js/faker";

const generateGuests = (count) => {
  const dataArray = [];

  for (let i = 0; i < count; i++) {
    const name = faker.person.fullName();
    const phone = faker.phone.number();
    const domain = `site.undangan.my.id/demo/${i + 1}`;
    const date = faker.date.past();
    const status = i % 2 ? "terkirim" : "tidak terkirim";

    dataArray.push({ id: i + 1, name, phone, domain, date, status });
  }

  return dataArray;
};

export default generateGuests;
