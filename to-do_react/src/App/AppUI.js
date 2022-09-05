import React from 'react'
import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import {TodoList} from '../TodoList'
import { TodoItem } from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton'
import {Modal} from '../Modal'
import {MyLoader} from '../LoadingScreen'
import { EmptyLoadedview } from '../EmptyLoadedView';
import { ErrorScreen } from '../ErrorScreen';

function AppUI() {

  const {error, 
    loading,
    searchedTodos,
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,

  } = React.useContext(TodoContext)

    return(
        <React.Fragment>

      <TodoCounter />
        
      <TodoSearch />

        <TodoList >

        {loading && <MyLoader/>}
        {error && <ErrorScreen/>}
        {(!loading && !searchedTodos.length) && <EmptyLoadedview />}

        {searchedTodos.map(todo => (
                  <TodoItem 
                  
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => completeTodo(todo.text)}
                  onDelete={()=> deleteTodo(todo.text)}
                  />
              ))}
        </TodoList>

        {openModal && (

          <Modal>
            
          </Modal>
        )}

      <CreateTodoButton 

        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </React.Fragment>
    );
}

export {AppUI};