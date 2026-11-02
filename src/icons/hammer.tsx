import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const strike = pose(
	{ rotate: [0, -30, 8, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.42, 1], ease: ["easeInOut", "easeIn", springy] },
);
const recoil = pose(
	{ rotate: [0, 0, -18, 0] },
	{ duration: 0.75, times: [0, 0.4, 0.5, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "hammer",
	render: (part) => (
		<motion.g {...part(strike)} style={pivot(4, 20)}>
			<path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9" />
			<motion.g {...part(recoil)} style={pivot(13.5, 10.5)}>
				<path d="m18 15 4-4" />
				<path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
			</motion.g>
		</motion.g>
	),
});
