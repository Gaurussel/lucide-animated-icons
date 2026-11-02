import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const shoot = (delay: number) =>
	pose({ x: [0, 2, 0], y: [0, -2, 0] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "axis-3d",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0, 0.4))} d="M4 4v15a1 1 0 0 0 1 1h15" />
			<motion.g {...part(shoot(0.2))}>
				<motion.path {...part(redraw(0.2, 0.3))} d="M4.293 19.707 6 18" />
			</motion.g>
			<motion.g {...part(shoot(0.26))}>
				<motion.path {...part(redraw(0.26, 0.3))} d="m9 15 1.5-1.5" />
			</motion.g>
			<motion.g {...part(shoot(0.32))}>
				<motion.path {...part(redraw(0.32, 0.3))} d="M13.5 10.5 15 9" />
			</motion.g>
		</>
	),
});
