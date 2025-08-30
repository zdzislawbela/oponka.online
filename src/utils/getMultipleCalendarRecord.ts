import { faker } from "@faker-js/faker";

const getSingleCalendarRecord = () => {
  const date = faker.date.anytime();
  const time = date.toTimeString().slice(0, 8); // "hh:mm:ss"

  const wordCount = faker.number.int({ min: 2, max: 5 });
  const description = faker.word.words(wordCount);

  return {
    key: faker.string.uuid(),
    name: faker.internet.username(),
    description,
    time,
  };
};

export const getMultipleCalendarRecord = () =>
  faker.helpers.multiple(getSingleCalendarRecord, {
    count: 10,
  });
