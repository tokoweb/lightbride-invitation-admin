import { faker } from "@faker-js/faker";

const generateTestimonial = (count) => {
  const dataArray = [];

  for (let i = 0; i < count; i++) {
    const name = faker.person.fullName();
    const city = faker.location.city();
    const state = faker.location.state();
    const review = faker.lorem.sentences({ min: 5, max: 6 });
    const active = !!(i % 2);

    dataArray.push({ id: i + 1, name, city, state, review, active });
  }

  return dataArray;
};

export default generateTestimonial;
