import React,{useReducer} from 'react';
import {Container} from "reactstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {TodoContext,TodoContextProvider} from "./context/TodoContext";
import todoReducer from"./context/reducer" ;
import TofoForm from './Components/TofoForm';
import Todos from './Components/Todos';


export default function App() {

  // const [todos,dipatch] = useReducer(todoReducer, [])
  return (
    <TodoContextProvider>
       <Container fluid className="App" >
       <h1>Todo App with Context API</h1>
     
       <TofoForm />
       <Todos />
     </Container>
    </TodoContextProvider>
  )
}
