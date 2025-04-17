import { useState } from "react";
import "./Hamburger.css";

export const Hamburger = () => {
	const [expanded, setExpanded] = useState<boolean>(false);
	const onClick = () => {
		setExpanded((prev) => !prev);
	};

	return (
		<div className="hamburger" onClick={onClick}>
			<span className="line"></span>
			<span className="line"></span>
			<span className="line"></span>
		</div>
	);
};
