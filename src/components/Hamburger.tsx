import { useState } from "react";
import "./Hamburger.css";

export const Hamburger = () => {
	const [expanded, setExpanded] = useState<boolean>(false);

	const toggleMenu = () => setExpanded(!expanded);

	return (
		<div className="hamburger-container">
			<button
				className="hamburger"
				onClick={toggleMenu}
				aria-label="Toggle navigation menu"
				aria-expanded={expanded}
			>
				<span className={`hamburger-icon ${expanded ? "active" : ""}`}>
					{!expanded ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							width="40"
							height="40"
						>
							<path
								d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"
								stroke="currentColor"
								strokeWidth="2"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 -960 960 960"
							width="40"
							height="40"
						>
							<path
								d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"
								stroke="currentColor"
								strokeWidth="2"
							/>
						</svg>
					)}
				</span>
			</button>
		</div>
	);
};
