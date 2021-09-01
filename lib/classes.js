function classes(props, ...classArguments) {
  return classArguments
    .flatMap((arg) => {
      if (typeof arg === "string") {
        return arg.split(" ");
      }

      if (typeof arg === "object") {
        return Object.keys(arg).flatMap((key) => {
          if (typeof arg[key] === "function") {
            return arg[key](props) ? key.split(" ") : "";
          }
        });
      }
    })
    .filter((x) => typeof x === "string" && x.length > 0)
    .filter((item, index, array) => array.indexOf(item) === index)
    .sort()
    .join(" ");
}

export default classes;
