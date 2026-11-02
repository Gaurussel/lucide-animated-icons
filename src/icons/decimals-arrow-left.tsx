import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const shove = (x: number, delay: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.65, delay, times: [0, 0.28, 1], ease: [snap, springy] });
const dot = pose({ scale: [1, 2, 1] }, { duration: 0.6, delay: 0.1, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "decimals-arrow-left",
	render: (part) => (
		<>
			<motion.g {...part(shove(-4, 0))}>
				<path d="m13 21-3-3 3-3" />
				<motion.path {...part(redraw(0.05, 0.4))} d="M20 18H10" />
			</motion.g>
			<motion.rect {...part(shove(-3, 0.05))} height="8" rx="2.5" width="5" x="6" y="3" />
			<motion.path {...part(dot)} d="M3 11h.01" style={centered} />
		</>
	),
});
