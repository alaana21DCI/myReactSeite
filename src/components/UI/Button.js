import "./Button.css";

const Button = (props) => {
  const cssClasses = "button " + props.className;
  return (
    <button
      type={props.type || "button"}
      className={cssClasses}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
