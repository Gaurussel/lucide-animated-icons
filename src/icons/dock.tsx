import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const bounce = pose(
	{ y: [0, -3, 0, -1.2, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 0.55, 1], ease: [snap, "easeIn", "easeOut", springy] },
);
const frame = pose(
	{ y: [0, 0, 0.72, 0] },
	{ duration: 0.7, times: [0, 0.4, 0.48, 1], ease: ["easeInOut", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "dock",
	render: (part) => (
		<>
			<motion.g {...part(frame)}>
				<rect height="16" rx="2" width="20" x="2" y="4" />
				<motion.path {...part(redraw(0.4, 0.3))} d="M2 8h20" />
			</motion.g>
			<motion.path {...part(bounce)} d="M6 16h12" />
		</>
	),
});
