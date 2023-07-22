import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  let [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart size={40} onClick={toggle}></AiFillHeart>;
  return <AiOutlineHeart size={40} onClick={toggle}></AiOutlineHeart>;
};

export default Like;
