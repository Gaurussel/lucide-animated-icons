import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, springy } from "../helpers.ts";

const spin = (delay: number) =>
	pose(
		{ x: [0, -1, 8, -8, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.65, delay, times: [0, 0.12, 0.36, 0.37, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);
const lean = pose(
	{ rotate: [0, 0, -12, 0] },
	{ duration: 0.75, times: [0, 0.35, 0.5, 1], ease: ["easeInOut", "easeOut", rubber] },
);

export default createAnimatedIcon({
	name: "earth",
	render: (part) => (
		<motion.g {...part(lean)} style={pivot(12, 22)}>
			<circle cx="12" cy="12" r="10" />
			<motion.path
				{...part(spin(0))}
				d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
			/>
			<motion.path {...part(spin(0.06))} d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
			<motion.path {...part(spin(0.12))} d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
		</motion.g>
	),
});
