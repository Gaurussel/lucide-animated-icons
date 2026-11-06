import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const rock = pose({ rotate: [0, -12, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: ["easeInOut", ring] });
const lift = pose({ y: [0, -1.5, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const fall = (delay: number) =>
	pose(
		{ y: [0, -0.6, 3.6, -2.4, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.65, delay, times: [0, 0.12, 0.4, 0.41, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "cloud-moon-rain",
	render: (part) => (
		<>
			<motion.path
				{...part(rock)}
				d="M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"
				style={pivot(16, 10)}
			/>
			<motion.path {...part(lift)} d="M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24" />
			<motion.path {...part(fall(0.06))} d="M11 20v2" />
			<motion.path {...part(fall(0))} d="M7 19v2" />
		</>
	),
});
