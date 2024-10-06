import "./LoadingAnimation.css";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/lottie/loading-animation.json";

export default function LoadingAnimation() {
	return (
		<div className="loading-animation-container">
			<div className="loading-animation">
				<Lottie animationData={loadingAnimation} loop={true} />
			</div>
		</div>
	);
}
