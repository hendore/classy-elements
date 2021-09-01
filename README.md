# 🥂 Classy Elements

Quickly create components from smaller composable and extendable elements using any CSS utility libraries such as tailwindcss, bootstrap, bulma or your own custom css.

🤩 [See it in action](#demos)

📖 [Read the docs](#docs)

## Why?

Too often we find ourselves editing large components mixed with concerns. With classy-elements we can quickly break up
large components into smaller pieces. The elements generated with classy-elements describe how it looks, the components
you write by hand wire these up to your applications state and logic.

A simple example of the counter below shows what happens when we mix logic and presentation concerns in a single component.
At a first glance it's not too bad for such a small component but as your application grows you will start to have much
bigger components with both logic and style concerns making it hard to reason about and maintain.

```javascript
const Counter = ({ value, onIncrement, onDecrement }) => (
  <div className="flex items-center gap-4">
    <button
      onClick={props.onDecrement}
      className="bg-white text-sm font-bold p-3 rounded-md"
    >
      -
    </button>
    <span className="font-bold text-2xl">{props.value}</span>
    <button
      onClick={props.onIncremenet}
      className="bg-white text-sm font-bold p-3 rounded-md"
    >
      +
    </button>
  </div>
);
```

A cleaner approach would be to create more components for the individual parts of the counter.

```javascript
const Counter = ({ value, onIncrement, onDecrement }) => (
  <Container>
    <Button onClick={onDecrement}>-</Button>
    <ValueText>{value}</ValueText>
    <Button onClick={onIncrement}>+</Button>
  </Container>
);
```

Rather than write each newly introduced element of the Counter component by hand we can use classy-elements to quickly
create new components with predefined classes, cutting out the boilerplate code that would have came with this task.

```javascript
// The counters root element, children will be spaced out evenly
const Container = classy.div("flex items-center gap-4");

// Both increment and decrement buttons share the same look
const Button = classy.button("bg-white text-sm font-bold p-3 rounded-md");

// The counters value, we change the style slightly if this element
// recieves a positive emphasise prop.
const ValueText = classy.span("font-bold text-2xl", {
  "text-red-400": (props) => props.emphasise,
});
```

## Easily extend elements

We seen above how new elements can be created from html tags such as `div`, `button`, `img` etc... but we can also extend other elements to quickly create new variations.

```javascript
// Creates a button element with some initial styles
const Button = classy.button("py-2 px-6 shadow-sm");

// `RoundedButton` looks like a `Button` but also adds smooth corners
const RoundedButton = classy(Button, "rounded-md");

// `CheckoutButton` looks like a `RoundedButton` but green.
const CheckoutButton = classy(
  RoundedButton,
  "bg-green-700 text-green-100 font-bold"
);

// `RemoveProductButton` looks like a `Button` but red and bold
const RemoveProductButton = classy(Button, "bg-red-700 text-red-100 font-bold");
```

## Conditionally apply classes

We can adjust the appearance of an element by adding new classes based on any props.

```javascript
const Button = classy.button("px-3 py-1 rounded-sm text-center", {
  "opacity-50 pointer-events-none": (props) => props.disabled,
});

const BlueButton = classy(Button, "bg-blue-700 text-blue-100");

<BlueButton>This button can be clicked</BlueButton>
<BlueButton disabled>This button is disabled</BlueButton>
```

## Adhoc styles

All classy elements can receive additional classes and styles so they work great
with other libraries or for adding quick one-off utility classes in a pinch.

```javascript
const Avatar = classy.img("rounded-full w-10 h-10 object-cover");

<Avatar
  src="..."
  className="float-right"
  style={{ transform: "rotate(20deg)" }}
/>;
```

## Demos

- [Kanban user interface](./demos/kanban-ui) (~75 lines of code)
- More demos coming soon...

## Docs

Working on it... ✍🏼
