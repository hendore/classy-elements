import classy from "classy-elements";
import Card from "../card";

export default (props) => {
  const avatars = props.assignees.map(({ avatarUrl }) => (
    <Avatar key={avatarUrl} src={avatarUrl} />
  ));

  return (
    <Container>
      <Header>
        <Label>{props.label}</Label>
        <MenuIcon />
      </Header>
      <Description>{props.description}</Description>
      <Image src={props.image} />
      <Footer>
        <AssigneeAvatars>{avatars}</AssigneeAvatars>
        <ActionsContainer>
          <CommentsIcon />
          <ShareIcon />
        </ActionsContainer>
      </Footer>
    </Container>
  );
}

const Container = classy(Card, "flex flex-col gap-3 p-3");
const Header = classy.div("flex items-center justify-between");
const Footer = classy.div("flex items-center justify-between");
const ActionsContainer = classy.div("flex items-center gap-2");

const Label = classy.span("py-1 px-3 bg-purple-100 text-purple-700 uppercase text-xs font-bold rounded-lg");
const Description = classy.p("font-semibold text-sm gray-800 leading-compact");
const Image = classy.img("rounded-md");

const Icon = classy.i("text-lg text-gray-400");
const MenuIcon = classy(Icon, "fa-fw fas fa-ellipsis-h");
const CommentsIcon = classy(Icon, "fa-fw far fa-comments");
const ShareIcon = classy(Icon, "fa-fw fas fa-share");

const AssigneeAvatars = classy.div("flex items-center -space-x-2");
const Avatar = classy.img("rounded-full w-8 h-8 border-2 border-white shadow-md");
