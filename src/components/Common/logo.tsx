import { Link } from "react-router-dom";

interface Props {
  text_color: "white" | "black";
}

export const Logo = ({ text_color }: Props) => {
  return (
    <Link to={"/"}>
      <h1 className={`text-${text_color} text-center`}>Techie</h1>
    </Link>
  );
};
