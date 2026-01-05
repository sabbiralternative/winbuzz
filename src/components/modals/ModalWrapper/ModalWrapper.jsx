import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/closeModal";

const ModalWrapper = ({ children, setModal }) => {
  const ref = useRef();

  useCloseModalClickOutside(ref, () => {
    setModal(false);
  });

  return <div ref={ref}>{children}</div>;
};

export default ModalWrapper;
