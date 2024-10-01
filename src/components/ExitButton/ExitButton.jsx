import "./ExitButton.css";

export default function ExitButton({ setShowModal }) {
	return (
		<div className="exit-button button-shadow pointer" onClick={() => setShowModal(false)}>
			<i className="fa-regular fa-circle-xmark fa-2xl" />
		</div>
	);
}
