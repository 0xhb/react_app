import { ReactNode } from "react";

interface Props {
  children: ReactNode; //this helps us to pass html content to the component
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};

export default Alert;
