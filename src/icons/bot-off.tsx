import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const wake = pose(
	{ y: [0, -1.5, 0.6, 0], rotate: [0, -3.6, 7.2, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.42, 1], ease: [snap, "easeIn", springy] },
);
const antenna = pose(
	{ rotate: [0, -15, 36, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.45, 1], ease: [snap, "easeIn", ring] },
);

export default createAnimatedIcon({
	name: "bot-off",
	render: (part) => (
		<>
			<motion.g {...part(wake)} style={pivot(12, 20)}>
				<path d="M13.67 8H18a2 2 0 0 1 2 2v4.33" />
				<path d="M2 14h2" />
				<path d="M20 14h2" />
				<path d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" />
				<path d="M9 13v2" />
				<motion.path {...part(antenna)} d="M9.67 4H12v2.33" style={pivot(12, 6.33)} />
			</motion.g>
			<motion.path {...part(redraw(0.2, 0.4))} d="M22 22 2 2" />
		</>
	),
});
