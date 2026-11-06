import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const stamp = pose({ scale: [1, 0.91, 1] }, { duration: 0.6, times: [0, 0.15, 1], ease: [snap, springy] });
const slide = pose({ x: [0, -1.8, 0], y: [0, -1.8, 0] }, { duration: 0.6, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "book-copy",
	render: (part) => (
		<>
			<motion.path
				{...part(stamp)}
				d="M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"
				style={centered}
			/>
			<motion.g {...part(slide)}>
				<motion.path {...part(redraw(0, 0.38))} d="M2 16V4a2 2 0 0 1 2-2h11" />
				<path d="M5 14H4a2 2 0 1 0 0 4h1" />
			</motion.g>
		</>
	),
});
