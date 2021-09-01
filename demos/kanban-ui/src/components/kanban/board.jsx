import classy from "classy-elements";
import Swimlane from "./swimlane";

export default (props) => {
  const swimlanes = props.swimlanes.map((swimlane) => (<Swimlane key={swimlane.id} {...swimlane} />));

  return <Container>{swimlanes}</Container>;
}

const Container = classy.div("flex items-start gap-6");
