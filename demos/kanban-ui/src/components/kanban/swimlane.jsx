import classy from "classy-elements";
import Button from "../button";
import Task from './task';

export default (props) => {
  const tasks = props.tasks.map((task) => <Task key={task.id} {...task} />);

  return (
    <Container>
      <Title>{props.title}</Title>
      <AddTaskButton>Add a task</AddTaskButton>
      <TasksContainer>{tasks}</TasksContainer>
    </Container>
  );
}

const Container = classy.section("flex-1 flex flex-col gap-3 p-4 rounded-md bg-gray-100");
const TasksContainer = classy.div("flex flex-col gap-4");
const Title = classy.h1("text-md font-bold");
const AddTaskButton = classy(Button, "block w-full font-semibold bg-purple-700 text-purple-100");
