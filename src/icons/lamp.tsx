import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap } from "../helpers.ts";

const sway = pose({ y: [0, -2, 0], rotate: [0, -16, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "lamp",
	render: (part) => (
		<>
			<motion.path
				{...part(sway)}
				d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z"
				style={pivot(12, 12)}
			/>
			<path d="M12 12v6" />
			<motion.path
				{...part(jelly(0.2, 0.75))}
				d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
