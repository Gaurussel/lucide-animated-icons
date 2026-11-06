import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const strike = pose(
	{ rotate: [0, -18, 4.8, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", "easeIn", springy] },
);
const recoil = pose(
	{ rotate: [0, 0, -10.8, 0] },
	{ duration: 0.75, times: [0, 0.4, 0.5, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "gavel",
	render: (part) => (
		<motion.g {...part(strike)} style={pivot(4, 20)}>
			<path d="m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8" />
			<motion.g {...part(recoil)} style={pivot(12.5, 10.5)}>
				<path d="m16 16 6-6" />
				<path d="m8 8 6-6" />
				<path d="m9 7 8 8" />
				<path d="m21 11-8-8" />
			</motion.g>
		</motion.g>
	),
});
