import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { kanbanColumns } from '../../utils/sample-data';
import Card from './Card';

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

function Board() {
  const [isBrowser, setBrowser] = useState(false);
  const [columns, setColumns] = useState(kanbanColumns);

  useEffect(() => {
    setBrowser(process.browser);
  }, []);

  return (
    <div className="w-full flex space-x-5 overflow-x-auto">
      {isBrowser ? (
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column]) => (
            <div
              className="flex flex-col bg-slate-100 dark:bg-dark-500 rounded-lg flex-shrink-0 min-w-[230px] lg:w-1/6"
              key={columnId}
            >
              <div className="px-4 py-2">
                <h2 className="font-semibold text-md leading-tight text-slate-600 dark:text-gray-300">
                  {column.name}
                </h2>
              </div>
              <div>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      className="p-2 w-full space-y-3"
                      /* eslint-disable react/jsx-props-no-spreading */
                      {...provided.droppableProps}
                    >
                      {column.items.map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(childProvided) => (
                            <Card
                              ref={childProvided.innerRef}
                              {...childProvided.draggableProps}
                              {...childProvided.dragHandleProps}
                              style={{
                                ...childProvided.draggableProps.style,
                              }}
                              task={item}
                            />
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </div>
            </div>
          ))}
        </DragDropContext>
      ) : null}
    </div>
  );
}

export default Board;
