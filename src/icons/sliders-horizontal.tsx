import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const times = [0, 0.35, 0.55, 1];
const nudge = (x: number, delay: number) =>
	pose({ x: [0, x, x, 0], scaleY: [1, 1.25, 1.25, 1] }, { duration: 0.8, delay, times });

export default createAnimatedIcon({
	name: "sliders-horizontal",
	render: (part) => (
		<>
			<motion.g {...part(nudge(-4, 0))} style={centered}>
				<line x1="14" x2="14" y1="2" y2="6" />
			</motion.g>
			<motion.g {...part(nudge(5, 0.1))} style={centered}>
				<line x1="8" x2="8" y1="10" y2="14" />
			</motion.g>
			<motion.g {...part(nudge(-5, 0.2))} style={centered}>
				<line x1="16" x2="16" y1="18" y2="22" />
			</motion.g>
			<line x1="21" x2="14" y1="4" y2="4" />
			<line x1="10" x2="3" y1="4" y2="4" />
			<line x1="21" x2="12" y1="12" y2="12" />
			<line x1="8" x2="3" y1="12" y2="12" />
			<line x1="21" x2="16" y1="20" y2="20" />
			<line x1="12" x2="3" y1="20" y2="20" />
		</>
	),
});
