// Note: The mock data here is used to present our classy-elements user interface. In the real world
// care should be taken to normalise nested data like this to make it easier to update but the point
// of the demo is to showcase classy-elements not state management.
export default [
  {
    id: 1,
    title: "Backlog",
    tasks: [
      {
        id: 1,
        swimlane: 1,
        description: "Redesign the landing page",
        label: "Design",
        assignees: [],
      },
      {
        id: 2,
        swimlane: 1,
        description: "Share todays tip of the day in the react channel",
        label: "Support",
        image: "https://i.pinimg.com/originals/3c/49/9c/3c499c3db2f79e1e80ba198ef2532d57.jpg",
        assignees: [],
      },
    ],
  },
  {
    id: 2,
    title: "Todo",
    tasks: [
      {
        id: 3,
        swimlane: 2,
        description: "Write better documentation for classy-elements",
        label: "Development",
        assignees: [
          {
            avatarUrl:
              "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?crop=faces&fit=crop&h=200&w=200&auto=compress&cs=tinysrgb",
          },
        ],
      },
      {
        id: 4,
        swimlane: 2,
        description: "Clean up old code with the help of classy-elements",
        label: "Development",
        assignees: [
          { avatarUrl: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg" },
          {
            avatarUrl: "https://randomuser.me/api/portraits/women/47.jpg",
          },
        ],
      },
      {
        id: 5,
        swimlane: 2,
        description: "Switch iOS icons with new branded designs",
        label: "Design",
        assignees: [
          {
            avatarUrl:
              "https://images.unsplash.com/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3e378252a934e660f231666b51bd269a",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "In Progress",
    tasks: [
      {
        id: 6,
        swimlane: 3,
        description: "Create some more examples to showcase classy-elements",
        label: "Development",
        assignees: [{ avatarUrl: "https://randomuser.me/api/portraits/women/47.jpg" }],
      },
      {
        id: 7,
        swimlane: 3,
        description: "Share classy-elements with the team",
        label: "Support",
        assignees: [
          {
            avatarUrl:
              "https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=99fbace66d1bfa48c9c6dc8afcac3aab",
          },
          {
            avatarUrl:
              "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ",
          },
          { avatarUrl: "https://uifaces.co/our-content/donated/1H_7AxP0.jpg" },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Completed",
    tasks: [
      {
        id: 8,
        swimlane: 4,
        description: "Add one more type of chart to the dashboard",
        label: "Development",
        image: "https://i.imgur.com/rMMXdYC.png",
        assignees: [
          {
            avatarUrl:
              "https://images.unsplash.com/photo-1507120878965-54b2d3939100?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=99fbace66d1bfa48c9c6dc8afcac3aab",
          },
        ],
      },
    ],
  },
];
