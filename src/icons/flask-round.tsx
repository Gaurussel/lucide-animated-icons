import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const swirl = pose(
	{ rotate: [0, -4.8, 13.2, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const slosh = pose(
	{ rotate: [0, 0, -24, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.38, 1], ease: ["easeInOut", snap, ring] },
);
const cork = pose(
	{ y: [0, 0, -2.4, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "flask-round",
	render: (part) => (
		<motion.g {...part(swirl)} style={pivot(12, 2)}>
			<path d="M10 2v6.292a7 7 0 1 0 4 0V2" />
			<motion.path {...part(slosh)} d="M5 15h14" style={pivot(12, 15)} />
			<motion.path {...part(cork)} d="M8.5 2h7" />
		</motion.g>
	),
});
