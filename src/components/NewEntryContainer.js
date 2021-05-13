import React, { useState } from 'react';
import { NewEntryForm } from './NewEntryForm';
import { addEntry } from './entry-service';

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

export { NewEntryContainer };