import "./Test.css"

import { useState } from "react";

function Test() {
	const [theme, setTheme] = useState('autumn-theme');

	return (
		<div className="df c gap">
			<div className={`df r gap`}>
				<section className={`${theme} color-display`}>Color One</section>
				<section className={`${theme} color-display`}>Color Two</section>
				<section className={`${theme} color-display`}>Color Three</section>
                        <section className={`${theme} color-display`}>Color Four</section>
			</div>
			<div className="df c gap">
                        <button onClick={() => setTheme('winter-theme')}>Winter</button>
                        <button onClick={() => setTheme('fall-theme')}>Fall</button>
                        <button onClick={() => setTheme('summer-theme')}>Summer</button>
				<button onClick={() => setTheme('spring-theme')}>Spring</button>
			</div>
		</div>
	);
}

export default Test;
