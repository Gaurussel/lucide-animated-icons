import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const sweep = pose(
	{ x: [0, -1.5, 3, 3, 0], y: [0, 1, -0.5, -0.5, 0] },
	{ duration: 0.8, times: [0, 0.2, 0.6, 0.75, 1] },
);
const tip = pose({ y: [0, 0, 1, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.35, 0.6, 1] });

export default createAnimatedIcon({
	name: "highlighter",
	render: (part) => (
		<motion.g {...part(sweep)}>
			<motion.path {...part(tip)} d="m9 11-6 6v3h9l3-3" />
			<path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4" />
		</motion.g>
	),
});
