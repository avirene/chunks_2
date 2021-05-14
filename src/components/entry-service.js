import { nanoid } from 'nanoid';

let entries = [
  { id: nanoid(), word: 'React', def: 'UI Library'},
  { id: nanoid(), word: 'Pizza', def: 'A tasty Italian food'},
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

const randomize = () => {
};

export {
  addEntry,
  getEntries,
  randomize
};
