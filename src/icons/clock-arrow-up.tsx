import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const sweep = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const fly = (y: number) =>
	pose(
		{ y: [0, -y * 0.25, y, -y, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.7, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "clock-arrow-up",
	render: (part) => (
		<>
			<motion.path {...part(sweep)} d="M12 6v6l1.56.78" style={pivot(12, 12)} />
			<path d="M13.227 21.925a10 10 0 1 1 8.767-9.588" />
			<motion.g {...part(fly(-8))}>
				<path d="m14 18 4-4 4 4" />
				<path d="M18 22v-8" />
			</motion.g>
		</>
	),
});
