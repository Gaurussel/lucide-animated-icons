import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, springy } from "../helpers.ts";

const flight = pose(
	{ x: [0, -2, 14, -8, 0], y: [0, 2, -14, 8, 0], scale: [1, 1, 0.7, 0.7, 1], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "send",
	render: (part) => (
		<motion.g {...part(hop(0.65))} style={centered}>
			<motion.g {...part(flight)} style={centered}>
				<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
				<path d="m21.854 2.147-10.94 10.939" />
			</motion.g>
		</motion.g>
	),
});
