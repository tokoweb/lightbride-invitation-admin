import { faker } from "@faker-js/faker";

const generateInvoice = (count) => {
  const dataArray = [];

  for (let i = 0; i < count; i++) {
    const name = faker.person.fullName();
    const invoiceNumber = "#" + faker.number.int({ min: 100000, max: 999999 });
    const domain = {
      name: faker.person.firstName(),
      href: "#",
    };
    const status = i % 2 ? "Lunas" : "Belum Lunas";

    dataArray.push({ id: i + 1, name, invoiceNumber, domain, status });
  }

  return dataArray;
};

export default generateInvoice;
