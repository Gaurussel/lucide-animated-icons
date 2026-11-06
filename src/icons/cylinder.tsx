import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, springy } from "../helpers.ts";

const lid = pose(
	{ y: [0, 0.6, -3.6, 0.6, 0], rotate: [0, 0, -8.4, 1.8, 0] },
	{ duration: 0.75, times: [0, 0.1, 0.3, 0.45, 1], ease: ["easeInOut", "easeOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "cylinder",
	render: (part) => (
		<>
			<motion.ellipse {...part(lid)} cx="12" cy="5" rx="9" ry="3" style={pivot(12, 5)} />
			<motion.path {...part(jelly(0.45, 0.75))} d="M3 5v14a9 3 0 0 0 18 0V5" style={edge(0.5, 1)} />
		</>
	),
});
