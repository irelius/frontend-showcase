import "./Modal.css";
import { useState } from "react";
import { ModalExitButton } from "../../components";

export default function Modal() {
	const [showModal, setShowModal] = useState(false);

	const closeModal = (e) => {
		e.stopPropagation();
		setShowModal(false);
	};

	return (
		<div className="dfc aic jcc full">
			<div className={`modal-${showModal}`} onClick={(e) => closeModal(e)}>
				<section className={`modal-box-${showModal}`} onClick={(e) => e.stopPropagation()}>
					<ModalExitButton setShowModal={setShowModal} />
					<section>this is modal content stuff</section>
				</section>
			</div>

			<button className="pointer" onClick={() => setShowModal(true)}>
				Show Modal
			</button>
		</div>
	);
}
