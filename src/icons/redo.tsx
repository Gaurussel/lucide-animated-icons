import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const flick = pose(
	{ x: [0, -1.2, 1.8, 0], y: [0, 0.6, -0.9, 0] },
	{ duration: 0.7, times: [0, 0.18, 0.42, 1], ease: ["easeInOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "redo",
	render: (part) => (
		<>
			<motion.path {...part(flick)} d="M21 7v6h-6" />
			<motion.path {...part(redraw(0.05, 0.45))} d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
		</>
	),
});
