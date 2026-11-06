import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pivot, pose, ring, snap, springy } from "../helpers.ts";

const emerge = pose(
	{ scale: [1, 0.73, 1.09, 1] },
	{ duration: 0.72, times: [0, 0.22, 0.42, 1], ease: ["easeInOut", snap, springy] },
);
const light = (delay: number) =>
	pose(
		{ scale: [1, 1, 2.2, 1] },
		{ duration: 0.72, delay, times: [0, 0.35, 0.48, 1], ease: ["easeInOut", snap, springy] },
	);
const rumble = pose(
	{ rotate: [0, 0, -3, 0] },
	{ duration: 0.72, times: [0, 0.38, 0.48, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "train-front-tunnel",
	render: (part) => (
		<>
			<motion.path {...part(rumble)} d="M2 22V12a10 10 0 1 1 20 0v10" style={pivot(12, 22)} />
			<motion.g {...part(emerge)} style={edge(0.5, 1)}>
				<path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" />
				<motion.path {...part(light(0))} d="M10 15h.01" style={centered} />
				<motion.path {...part(light(0.04))} d="M14 15h.01" style={centered} />
				<path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" />
				<path d="m9 19-2 3" />
				<path d="m15 19 2 3" />
			</motion.g>
		</>
	),
});
