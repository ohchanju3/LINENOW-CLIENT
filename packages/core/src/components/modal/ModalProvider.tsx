import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// components
import Modal from "./Modal";
import FixedContainer from "../fixedContainer/FixedContainer";

// hooks
import useModal from "../../hooks/useModal";

const ModalProvider = () => {
  const { modal, closeModal } = useModal();
  const { isOpen, props } = modal;

  const location = useLocation();
  useEffect(() => {
    closeModal();
  }, [location.pathname]);

  if (isOpen && props != undefined) {
    return (
      <FixedContainer
        justifyContent="center"
        zIndex={102}
        closeContainer={closeModal}
      >
        <Modal {...props} />
      </FixedContainer>
    );
  }
  return;
};

export default ModalProvider;
