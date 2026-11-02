import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const flare = pose(
	{ scale: [1, 1.3, 1], rotate: [0, -14, 0], y: [0, -2, 0] },
	{ duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] },
);
const shove = pose({ x: [0, -2, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "brick-wall-fire",
	render: (part) => (
		<>
			<motion.g {...part(shove)}>
				<path d="M16 3v2.107" />
				<path d="M21 8.274V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.938" />
				<path d="M3 15h5.253" />
				<path d="M3 9h8.228" />
				<path d="M8 15v6" />
				<path d="M8 3v6" />
			</motion.g>
			<motion.path
				{...part(flare)}
				d="M17 9c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 22 17a5 5 0 0 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C13 11.5 16 9 17 9"
				style={pivot(17, 22)}
			/>
		</>
	),
});
