import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const pull = pose({ scaleY: [1, 1.3, 1, 1, 1, 1] }, { duration: 0.85, times: [0, 0.15, 0.3, 0.6, 0.75, 1] });
const flick = pose(
	{ opacity: [1, 1, 0.35, 1, 0.65, 1], scale: [1, 1, 1.05, 1, 1.03, 1] },
	{ duration: 0.85, times: [0, 0.3, 0.45, 0.6, 0.75, 1] },
);

export default createAnimatedIcon({
	name: "lamp",
	render: (part) => (
		<>
			<motion.path {...part(pull)} d="M12 12v6" style={edge(0.5, 0)} />
			<motion.path
				{...part(flick)}
				d="M4.077 10.615A1 1 0 0 0 5 12h14a1 1 0 0 0 .923-1.385l-3.077-7.384A2 2 0 0 0 15 2H9a2 2 0 0 0-1.846 1.23Z"
				style={edge(0.5, 0)}
			/>
			<path d="M8 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1z" />
		</>
	),
});
