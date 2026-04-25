import Gallery from './Gallery';

const Modal = ({ images, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>✕</button>
        <Gallery images={images} onMainClick={() => {}} />
      </div>
    </div>
  );
};

export default Modal;