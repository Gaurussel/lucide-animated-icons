import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap } from "../helpers.ts";

const gust = (degrees: number, at: number) =>
	pose(
		{ rotate: [0, 0, degrees, 0] },
		{ duration: 0.72, times: [0, at, at + 0.14, 1], ease: ["easeInOut", snap, ring] },
	);

export default createAnimatedIcon({
	name: "trees",
	render: (part) => (
		<>
			<motion.g {...part(gust(-20, 0.05))} style={pivot(7, 22)}>
				<path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z" />
				<path d="M7 16v6" />
			</motion.g>
			<motion.g {...part(gust(-14, 0.2))} style={pivot(13, 22)}>
				<path d="M13 19v3" />
				<path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5" />
			</motion.g>
		</>
	),
});
