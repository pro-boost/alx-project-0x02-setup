import { type ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({
  type,
  size,
  shape,
  text,
  background,
  onClick,
}) => {
  return (
    <>
      <button
        type={type}
        className={`${background} ${size} ${shape}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};
export default Button;
