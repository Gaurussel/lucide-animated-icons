import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, springy } from "../helpers.ts";

const flip = (delay: number) =>
	pose({ scaleX: [1, -0.2, 1] }, { duration: 0.48, delay, times: [0, 0.4, 1], ease: ["easeInOut", springy] });

export default createAnimatedIcon({
	name: "binary",
	render: (part) => (
		<>
			<motion.rect {...part(flip(0))} height="6" rx="2" style={centered} width="4" x="6" y="4" />
			<motion.g {...part(flip(0.08))} style={centered}>
				<path d="M14 10h4" />
				<path d="M14 4h2v6" />
			</motion.g>
			<motion.g {...part(flip(0.16))} style={centered}>
				<path d="M6 20h4" />
				<path d="M6 14h2v6" />
			</motion.g>
			<motion.rect {...part(flip(0.24))} height="6" rx="2" style={centered} width="4" x="14" y="14" />
		</>
	),
});
