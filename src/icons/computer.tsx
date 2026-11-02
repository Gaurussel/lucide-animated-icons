import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const tap = pose({ y: [0, 1.5, 0] }, { duration: 0.6, times: [0, 0.15, 1], ease: [snap, springy] });
const boot = pose(
	{ y: [0, 0, -4, 0], rotate: [0, 0, -8, 0] },
	{ duration: 0.7, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "computer",
	render: (part) => (
		<>
			<motion.rect {...part(boot)} height="8" rx="2" style={pivot(12, 10)} width="14" x="5" y="2" />
			<motion.g {...part(tap)}>
				<rect height="8" rx="2" width="20" x="2" y="14" />
				<motion.path {...part(redraw(0.05, 0.25))} d="M6 18h2" />
				<motion.path {...part(redraw(0.14, 0.3))} d="M12 18h6" />
			</motion.g>
		</>
	),
});
