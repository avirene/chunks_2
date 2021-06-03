import React from 'react';
import { Card } from 'semantic-ui-react';

// presentation

const EntryList = ({ entries }) => {
    return (
    <dl>
      {entries.map(element => (
      <React.Fragment key={element.id}>
        <Card color='teal'>
          <Card.Content>
            <Card.Header>{ element.word }</Card.Header>
            <Card.Description>{ element.def }</Card.Description>
          </Card.Content>
        </Card>
      </React.Fragment>
    ))}
    </dl>
  );

}

export { EntryList };
