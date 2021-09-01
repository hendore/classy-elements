import ReactDOM from "react-dom";
import KanbanBoard from './components/kanban/board';
import swimlanes from "./data/swimlanes.js";
import classy from "classy-elements";

const Frame = classy.div("min-h-screen p-12 bg-gradient-to-b from-purple-600 to-purple-400");

ReactDOM.render(
  <Frame>
    <KanbanBoard swimlanes={swimlanes} />
  </Frame>,
  document.getElementById("kanban-app")
);
