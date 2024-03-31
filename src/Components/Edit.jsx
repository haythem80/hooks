import React, { useState } from "react";
import Modal from "react-modal";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Edit = ({ task, handleEdit }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [editedAction, setEditedAction] = useState(task.action);
  console.log(handleEdit);
  const handleSubmit = (e) => {
    e.preventDefault();
    const editedItem = {
      id: task.id,
      action: editedAction,
      isDone: task.isDone,
    };
    handleEdit(editedItem)
    closeModal()
  };
  Modal.setAppElement("#root");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit} >
          <input
            type="text"
            value={editedAction}
            onChange={(e) => setEditedAction(e.target.value)}
          />
          <div>
            <button onClick={closeModal} >Cancel</button>
            <button  type="submit">Confirme</button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Edit;
