import { nanoid } from 'nanoid';

let entries = [
  { id: nanoid(), word: 'perilous', def: 'very dangerous'},
  { id: nanoid(), word: 'palpable', def: 'so strong that you seem to feel it physically yourself'},
];

const addEntry = ({ word, def }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newEntry = { id: nanoid(), word, def };
      entries = [ ...entries, newEntry];
      resolve(newEntry);
    }, 500);
  });
};

const getEntries = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(entries);
    }, 1500);
  });
};

export {
  addEntry,
  getEntries,
};
