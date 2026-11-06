import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const snip = (degrees: number) =>
	pose(
		{ rotate: [0, degrees, 0, degrees, 0] },
		{ duration: 0.7, times: [0, 0.12, 0.24, 0.36, 1], ease: ["easeInOut", "easeInOut", "easeInOut", springy] },
	);
const advance = pose({ x: [0, -1.2, 0] }, { duration: 0.7, times: [0, 0.36, 1], ease: ["easeInOut", springy] });

export default createAnimatedIcon({
	name: "scissors-line-dashed",
	render: (part) => (
		<>
			<motion.g {...part(snip(-16))} style={pivot(8, 12)}>
				<path d="M5.42 9.42 8 12" />
				<circle cx="4" cy="8" r="2" />
				<path d="M10.8 14.8 14 18" />
			</motion.g>
			<motion.g {...part(snip(16))} style={pivot(8, 12)}>
				<path d="m14 6-8.58 8.58" />
				<circle cx="4" cy="16" r="2" />
			</motion.g>
			<motion.path {...part(advance)} d="M16 12h-2" />
			<motion.path {...part(advance)} d="M22 12h-2" />
		</>
	),
});
