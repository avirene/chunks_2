import React, { useState, useEffect } from 'react';
import { getEntries } from './entry-service';
import { EntryList } from './EntryList';
import { Container, Divider, Header } from 'semantic-ui-react';
import { NewEntryContainer } from './NewEntryContainer';

const PracticePage = () => {

  return (
    <Container style={{ marginTop: '50px' }}>
      <Header as="h1">Practice</Header>
      <Divider />
    </Container>
  );
};

export { PracticePage };