import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap, springy } from "../helpers.ts";

const write = pose(
	{ rotate: [0, -7.2, 3.6, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.55, 1], ease: ["easeInOut", "easeInOut", rubber] },
);
const flick = pose(
	{ x: [0, 0, 1.5, 0] },
	{ duration: 0.72, times: [0, 0.55, 0.65, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "ampersand",
	render: (part) => (
		<motion.g {...part(write)} style={pivot(12, 20)}>
			<motion.path
				{...part(redraw(0, 0.42))}
				d="M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
			/>
			<motion.g {...part(flick)}>
				<motion.path {...part(redraw(0.36, 0.25))} d="M16 12h3" />
			</motion.g>
		</motion.g>
	),
});
