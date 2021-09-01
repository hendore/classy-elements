import { createElement } from "react";
import isPropValid from "@emotion/is-prop-valid";
import elements from "./html-elements";
import classes from "./classes";

function classy(Element, ...classArguments) {
  return function ({ className, ...props }) {
    const validProps = Object.keys(props)
      .filter(isPropValid)
      .reduce((result, key) => ({ ...result, [key]: props[key] }), {});

    return createElement(Element, {
      className: classes(props, className, ...classArguments),
      ...validProps,
    });
  };
}

elements.forEach((element) => {
  classy[element] = (...classArguments) => classy(element, ...classArguments);
});

export default classy;
