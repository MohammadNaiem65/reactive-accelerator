import React from "react";

export default function Field({ label, htmlFor, children, error }) {
  const id = htmlFor || getChildId(children);
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}

      {children}

      {!!error && <span className="text-red-500">{error.message}</span>}
    </div>
  );
}

const getChildId = (children) => {
  const child = React.Children.only(children);

  if ("id" in child?.props) {
    return child.props.id;
  }
};
