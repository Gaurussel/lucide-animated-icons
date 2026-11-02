import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const shake = pose({ rotate: [0, -14, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });
const mist = (delay: number) =>
	pose(
		{ x: [0, -3, 2, 0], opacity: [1, 0, 0, 1] },
		{ duration: 0.55, delay, times: [0, 0.35, 0.36, 1], ease: ["easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "spray-can",
	render: (part) => (
		<>
			<motion.path {...part(mist(0.2))} d="M3 3h.01" />
			<motion.path {...part(mist(0.1))} d="M7 5h.01" />
			<motion.path {...part(mist(0))} d="M11 7h.01" />
			<motion.path {...part(mist(0.15))} d="M3 7h.01" />
			<motion.path {...part(mist(0.05))} d="M7 9h.01" />
			<motion.path {...part(mist(0.1))} d="M3 11h.01" />
			<motion.g {...part(shake)} style={pivot(17, 22)}>
				<rect height="4" width="4" x="15" y="5" />
				<path d="m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2" />
				<path d="m13 14 8-2" />
				<path d="m13 19 8-2" />
			</motion.g>
		</>
	),
});
