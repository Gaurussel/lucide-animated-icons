import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const rock = pose({ rotate: [0, -20, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", ring] });
const pass = pose({ x: [0, -4, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "cloud-moon",
	render: (part) => (
		<>
			<motion.path
				{...part(rock)}
				d="M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"
				style={pivot(16, 10)}
			/>
			<motion.path {...part(pass)} d="M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z" />
		</>
	),
});
