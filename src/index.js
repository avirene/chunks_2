import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { addEntry, getEntries } from './entry-service';


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
    <div>
      <NewEntryContainer onEntryAdded={handleAddedEntry}/>
      <EntryList entries={entries}/>
    </div>
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
    <form onSubmit={(e) => {
      e.preventDefault();
      onNewEntry({ word: 'Hello', def: 'World' })
    }}>
      { loading && <div>loading</div> }
      { error && <div>error</div> }
      Term <input name="word"/>
      Def <input name="def"/>
      <button>Submit</button>
    </form>
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

