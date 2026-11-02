import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, rubber, snap, springy } from "../helpers.ts";

const drip = pose(
	{ y: [0, 7, 0], opacity: [1, 0, 1] },
	{ duration: 0.65, times: [0, 0.3, 1], ease: ["easeIn", springy] },
);
const ripple = pose({ y: [0, 0, 2, 0] }, { duration: 0.72, times: [0, 0.3, 0.38, 1], ease: ["easeInOut", snap, ring] });
const rock = pose(
	{ rotate: [0, 0, -9, 0] },
	{ duration: 0.72, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "bath",
	render: (part) => (
		<>
			<motion.g {...part(drip)}>
				<path d="M10 4 8 6" />
			</motion.g>
			<motion.g {...part(rock)} style={pivot(12, 21)}>
				<motion.path {...part(ripple)} d="M2 12h20" />
				<path d="M17 19v2" />
				<path d="M7 19v2" />
				<path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
			</motion.g>
		</>
	),
});
