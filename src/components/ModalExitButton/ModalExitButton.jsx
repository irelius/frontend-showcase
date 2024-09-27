import "./ModalExitButton.css";

export default function ModalExitButton({ setShowModal }) {
	return (
		<div className="modal-exit-button pointer" onClick={() => setShowModal(false)}>
			<i className="fa-regular fa-circle-xmark fa-2xl" />
		</div>
	);
}
