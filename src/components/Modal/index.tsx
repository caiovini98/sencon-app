import React from "react";
import { User } from "../../model/user";
import "./styles.css";

interface ModalProps {
  setIsOpen: (isOpen: boolean) => void;
  user?: User;
  indice: number;
}

const Modal = (props: ModalProps) => {
  const { setIsOpen, user, indice } = props;

  return (
    <>
      <div className="modalContainer" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Dados do usuário</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <span>X</span>
          </button>
          <div className="modalContent">
            O username do usuário é {user?.name}
          </div>
          <div className="modalContent">
            O id do usuário {user?.id} e sua posição é {indice}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
