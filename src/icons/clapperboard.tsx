import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const clap = pose({ rotate: [0, -14.4, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: ["easeInOut", ring] });
const board = pose(
	{ y: [0, 0, 0.9, 0] },
	{ duration: 0.75, times: [0, 0.3, 0.38, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "clapperboard",
	render: (part) => (
		<>
			<motion.g {...part(clap)} style={pivot(3, 11)}>
				<path d="M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z" />
				<path d="m6.2 5.3 3.1 3.9" />
				<path d="m12.4 3.4 3.1 4" />
			</motion.g>
			<motion.path {...part(board)} d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
		</>
	),
});
