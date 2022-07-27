import React from "react";
import Title from "../components/title"
import TaskControl from "../components/taskControl";
import TodoList from "../components/todoList";

export default function Home(props) {
  return (
    <>
      <Title title="Gestion des tâches"/>
      <TaskControl/>
      <TodoList/>
    </>
  );
}
