import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, rubber, snap, springy } from "../helpers.ts";

const spin = pose(
	{ rotate: [0, 4.79, 0] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", springy], reset: true },
);
const core = pose({ scale: [1, 0.76, 1] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "chrome",
	render: (part) => (
		<>
			<circle cx="12" cy="12" r="10" />
			<motion.g {...part(spin)} style={centered}>
				<line x1="21.17" x2="12" y1="8" y2="8" />
				<line x1="3.95" x2="8.54" y1="6.06" y2="14" />
				<line x1="10.88" x2="15.46" y1="21.94" y2="14" />
			</motion.g>
			<motion.circle {...part(core)} cx="12" cy="12" r="4" style={centered} />
		</>
	),
});
