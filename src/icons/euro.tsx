import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, hop, pose, redraw, snap, springy } from "../helpers.ts";

const bar = (delay: number) =>
	pose({ x: [0, -3, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "euro",
	render: (part) => (
		<motion.g {...part(hop(0.7))} style={centered}>
			<motion.path
				{...part(redraw(0, 0.5))}
				d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"
			/>
			<motion.path {...part(bar(0.05))} d="M4 10h12" />
			<motion.path {...part(bar(0.1))} d="M4 14h9" />
		</motion.g>
	),
});
