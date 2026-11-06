import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, rubber } from "../helpers.ts";

const tip = pose(
	{ rotate: [0, 1.8, -13.2, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.32, 1], ease: ["easeInOut", "easeOut", rubber] },
);
const lag = pose(
	{ rotate: [0, 0, 4.8, 0] },
	{ duration: 0.75, delay: 0.08, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", "easeOut", ring] },
);

export default createAnimatedIcon({
	name: "cone",
	render: (part) => (
		<motion.g {...part(tip)} style={pivot(21, 19)}>
			<motion.path {...part(lag)} d="m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98" style={pivot(12, 19)} />
			<ellipse cx="12" cy="19" rx="9" ry="3" />
		</motion.g>
	),
});
