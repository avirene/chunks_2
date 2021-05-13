import React from 'react';
import { Card } from 'semantic-ui-react';

const EntryList = ({ entries }) => {
  const elements = entries.map(({ id, word, def }) => {
    return(
      <React.Fragment key={id}>
        <Card color='teal'>
          <Card.Content>
            <Card.Header>{ word }</Card.Header>
            <Card.Description>{ def }</Card.Description>
          </Card.Content>
        </Card>
      </React.Fragment>
    )
  });

  return (
    <dl>
      { elements }
    </dl>
  )
}

export { EntryList };
