import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { addEntry, getEntries } from './entry-service';
import { Container, Divider, Header, Form, Button } from 'semantic-ui-react';


const App = () => {
  return <HomePage />;
}

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
      <EntryList entries={entries}/>
    </Container>
  );
};

// logic and data access
const NewEntryContainer = ({ onEntryAdded }) => {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleNewEntry = (entry) => {
    setLoading(true);
    addEntry(entry)
      .then((res) => {
        setLoading(false);
        onEntryAdded(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      })
  }

  return (
    <NewEntryForm onNewEntry={handleNewEntry} loading={loading} error={error}/>
  );
}

// Presentation only
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

const EntryList = ({ entries }) => {
  const elements = entries.map(({ id, word, def }) => {
    return(
      <React.Fragment key={id}>
        <dt>{ word }</dt>
        <dd>{ def }</dd>
      </React.Fragment>
    )
  });

  return (
    <dl>
      { elements }
    </dl>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
