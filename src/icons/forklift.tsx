import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const drive = pose(
	{ x: [0, -2, 3, 0], rotate: [0, 3, -8, 0] },
	{ duration: 0.75, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const bump = (delay: number) =>
	pose({ y: [0, 0, -1.5, 0] }, { duration: 0.75, delay, times: [0, 0.35, 0.45, 1], ease: ["easeInOut", snap, ring] });

export default createAnimatedIcon({
	name: "forklift",
	render: (part) => (
		<motion.g {...part(drive)} style={pivot(5, 21)}>
			<path d="M12 12H5a2 2 0 0 0-2 2v5" />
			<motion.circle {...part(bump(0))} cx="13" cy="19" r="2" />
			<motion.circle {...part(bump(0.06))} cx="5" cy="19" r="2" />
			<path d="M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5" />
		</motion.g>
	),
});
