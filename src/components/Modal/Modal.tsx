import { Center, CloseButton, Rating } from "@mantine/core";
import "./modal.scss";

export const Modal = () => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <span className="modal-span">Your rating</span>
          <CloseButton variant="transparent" />
        </div>
        <div className="modal-content">
          <span className="modal-title">Coco</span>
          <Rating count={10} size="lg" style={{ display: "flex", gap: "7.40px" }} />

          <div className="modal-footer">
            <button className="button">Save</button>
            <button className="button-remove-rating">Remove rating</button>
          </div>
        </div>
      </div>
    </div>
  );
};
