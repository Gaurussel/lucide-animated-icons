import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const knocked = pose(
	{ y: [0, 0, 2, 0], rotate: [0, 0, 24, 0] },
	{ duration: 0.72, times: [0, 0.22, 0.36, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "umbrella-off",
	render: (part) => (
		<>
			<motion.g {...part(knocked)} style={pivot(14, 21)}>
				<path d="M12 2v1" />
				<path d="M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575" />
				<path d="M17.5 12H22A10 10 0 0 0 9.004 3.455" />
			</motion.g>
			<motion.path {...part(redraw(0, 0.3))} d="m2 2 20 20" />
		</>
	),
});
