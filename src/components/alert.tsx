import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void; //this helps us to pass html content to the component
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        onClick={onClose}
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
