import React, { useState, useEffect } from 'react';
import { getEntries } from './entry-service';
import { EntryList } from './EntryList';
import { Container, Divider, Header, Button } from 'semantic-ui-react';
import { NewEntryContainer } from './NewEntryContainer';
import { Link } from 'react-router-dom';
import { PracticePage } from './PracticePage';
// import PropType from 'prop-types';

const HomePage = () => {

  const [entries,  setEntries] = useState([]);

  useEffect(() => {
    // loading
    getEntries()
      .then((entries) => {
        setEntries(entries)
      })
      .catch(() => {
        // handle error
      })
  }, []);

  const handleAddedEntry = (entry) => {
    setEntries((oldEntries) => [entry, ...oldEntries]);
  };

  return (
    <Container style={{ marginTop: '50px' }}>
      <Header as="h1">Add Your Chunks</Header>
      <Divider />
      <NewEntryContainer onEntryAdded={handleAddedEntry}/>
      <Divider />
      <Button practiceEntries={entries}
        color='purple'
        as={Link}
        to={'/practice'}>
        Practice
      </Button>
      <Divider />
      <EntryList entries={entries}/>
    </Container>
  );
};

// HomePage.propTypes = {
//   entries: PropType.arrayOf(PropType.shape({
//     id: PropType.string.isRequired,
//     word: PropType.string.isRequired,
//     def: PropType.string.isRequired,
//   }).isRequired)
// };

export { HomePage };

