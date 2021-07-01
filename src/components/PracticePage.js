import React, { useState, useEffect } from 'react';
import { getEntries } from './entry-service';
import { Container, Divider, Header, Form, Button, Message } from 'semantic-ui-react';

const PracticePage = () => {

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

  const randomiseEntry = Math.floor(Math.random() * entries.length);
  console.log(randomiseEntry)

  return (
    <Container style={{ marginTop: '50px' }}>
      <Header as="h1">Practice</Header>
      <Divider />
      <Form>
      <Form.Field>
        <label>Definition</label>
        <div>
          <Message color='violet'>{`${entries[randomiseEntry]}`}</Message>
        </div>
      </Form.Field>
      <Form.Field>
        <label>Please type in the word</label>
        <input placeholder='Word?' id="word" name="word"/>
      </Form.Field>
      <Button color='teal' type='submit'>Submit</Button>
    </Form>
    </Container>
  );
};

export { PracticePage };