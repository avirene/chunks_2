import React, { useState, useEffect } from 'react';
import { getEntries } from './entry-service';
import { EntryList } from './EntryList';
import { Container, Divider, Header, Button } from 'semantic-ui-react';
import { NewEntryContainer } from './NewEntryContainer';
import { Link } from 'react-router-dom';

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
      <Button color='purple'
        as={Link}
        to={'/practice'}
        style={{
          cursor: 'pointer',
        }}>
        Practice
      </Button>
      <Divider />
      <EntryList entries={entries}/>
    </Container>
  );
};

export { HomePage };