// src/App.js
import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  BOX: 'box',
};

const DraggableBox = ({ id, text, index, moveBox }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveBox(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  }));

  return (
    <Box
      ref={(node) => drag(drop(node))}
      p={5}
      m={2}
      bg={isDragging ? 'gray.300' : 'blue.500'}
      color="white"
      cursor="move"
      w={["100px", "500px"]}
      transition="transform 0.2s ease"
      style={{
        opacity: isDragging ? 0.5 : 1,
        transform: isDragging ? 'scale(0.01)' : 'scale(1)',
      }}
    >
      {text}
    </Box>
  );
};

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Item 1' },
    { id: 2, text: 'Item 2' },
    { id: 3, text: 'Item 3' },
  ]);

  const moveBox = (fromIndex, toIndex) => {
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      const [movedItem] = updatedItems.splice(fromIndex, 1);
      updatedItems.splice(toIndex, 0, movedItem);
      return updatedItems;
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Flex flexDirection="column" alignItems="center" mt={10}>
        {items.map((item, index) => (
          <DraggableBox
            key={item.id}
            id={item.id}
            index={index}
            text={item.text}
            moveBox={moveBox}
          />
        ))}
      </Flex>
    </DndProvider>
  );
};

export default App;
