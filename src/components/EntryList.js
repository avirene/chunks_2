import React from 'react';
import { Card } from 'semantic-ui-react';
// import PropType from 'prop-types';

// presentation

const EntryList = ({ entries }) => {
  // const elements = entries.map(({ id, word, def }) => {
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

  // return (
  //   <dl>
  //     { elements }
  //   </dl>
  // )
}

// EntryList.propTypes = {
//   elements: PropType.arrayOf(PropType.shape({
//     id: PropType.string.isRequired,
//     word: PropType.string.isRequired,
//     def: PropType.string.isRequired,
//   }).isRequired)
// };

export { EntryList };
