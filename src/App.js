import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { addEntry, getEntries } from './components/entry-service';
import { EntryList } from './components/EntryList';
import { NewEntryForm } from './components/NewEntryForm';
import { Container, Divider, Header } from 'semantic-ui-react';


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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
