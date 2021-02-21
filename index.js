export function withHover(props) {
  return {
    "@media (hover: hover)": {
      "&:hover": {
        ...props,
      },
    },
  }
}

export function em() {
  let result = ""
  for (let argument of arguments) {
    result += `${argument.toString()}em `
  }
  return result.trim()
}

export function center() {
  return {
    marginLeft: "auto",
    marginRight: "auto",
  }
}

export function rgba(r, g, b, a) {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export function vh(num) {
  return `${num.toString()}vh`
}
export function vw(num) {
  return `${num.toString()}vw`
}

export function fr(num) {
  let css = ""
  while (num > 0) {
    css += "1fr "
    num--
  }
  return css.trim()
}

export function exceptForLast(props) {
  return {
    "&:not(:last-of-type)": {
      ...props,
    },
  }
}
export function exceptForFirst(props) {
  return {
    "&:not(:first-of-type)": {
      ...props,
    },
  }
}
export function firstOfType(props) {
  return {
    "&:first-of-type": {
      ...props,
    },
  }
}

export function lastOfType(props) {
  return {
    "&:last-of-type": {
      ...props,
    },
  }
}

export function withMinWidth(width, props) {
  return {
    [`@media (min-width: ${width}em)`]: {
      ...props,
    },
  }
}

export function withMaxWidth(width, props) {
  return {
    [`@media (max-width: ${width}em)`]: {
      ...props,
    },
  }
}
