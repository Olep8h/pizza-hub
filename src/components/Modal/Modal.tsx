import React from 'react';


type ModalProps = {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
};

const Modal: React.FC<ModalProps> = ({ message, onConfirm, onCancel }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <p>{message}</p>
                <button className="on_confirm__button" onClick={onConfirm}>Yes</button>
                <button className="on_cancel__button" onClick={onCancel}>No</button>
            </div>
        </div>
    );
};

export default Modal;