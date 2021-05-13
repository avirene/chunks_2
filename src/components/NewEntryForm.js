import React from 'react';
import { Form, Button } from 'semantic-ui-react';

//presentation

const NewEntryForm = ({ onNewEntry, loading, error }) => {

  return (
    <Form onSubmit={(e) => {
      e.preventDefault();
      onNewEntry({ word: document.getElementById("word").value, def: document.getElementById("def").value })
    }}>
      { loading && <div>loading</div> }
      { error && <div>error</div> }
      <Form.Field>
        <label>Word</label>
        <input placeholder='New word' id="word" name="word"/>
      </Form.Field>
      <Form.Field>
        <label>Definition</label>
        <input placeholder='Definition' id="def" name="def"/>
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  );
}

export { NewEntryForm };