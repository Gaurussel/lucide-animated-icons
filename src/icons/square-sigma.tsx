import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, redraw, ring, snap } from "../helpers.ts";

const bounce = pose(
	{ y: [0, 0, -1.8, 0] },
	{ duration: 0.72, times: [0, 0.45, 0.58, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "square-sigma",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.58, 0.75))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.g {...part(bounce)}>
				<motion.path {...part(redraw(0, 0.45))} d="M16 8.9V7H8l4 5-4 5h8v-1.9" />
			</motion.g>
		</>
	),
});
