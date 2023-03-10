export type ButtonProps = {
  children?: JSX.Element;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button = (props: ButtonProps) => {
  return (
    <button type="button" {...props}>
      {props.children}
    </button>
  );
};

export default Button;
