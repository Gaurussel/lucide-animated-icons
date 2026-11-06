import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const scan = pose(
	{ x: [0, 0.6, -4.2, 0], y: [0, 0, -1.8, 0], rotate: [0, 4.8, -9, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.4, 1], ease: ["easeInOut", "easeInOut", rubber] },
);
const found = (at: number) =>
	pose({ x: [0, 0, -1.5, 0] }, { duration: 0.75, times: [0, at, at + 0.12, 1], ease: ["easeInOut", snap, springy] });

export default createAnimatedIcon({
	name: "text-search",
	render: (part) => (
		<>
			<path d="M21 6H3" />
			<motion.path {...part(found(0.3))} d="M10 12H3" />
			<motion.path {...part(found(0.22))} d="M10 18H3" />
			<motion.g {...part(scan)} style={pivot(17, 15)}>
				<circle cx="17" cy="15" r="3" />
				<path d="m21 19-1.9-1.9" />
			</motion.g>
		</>
	),
});
