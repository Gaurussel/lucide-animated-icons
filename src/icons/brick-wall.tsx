import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const shove = (x: number, delay: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.65, delay, times: [0, 0.25, 1], ease: [snap, rubber] });
const wobble = pose({ rotate: [0, -8, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "brick-wall",
	render: (part) => (
		<motion.g {...part(wobble)} style={pivot(12, 21)}>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<path d="M3 15h18" />
			<path d="M3 9h18" />
			<motion.g {...part(shove(4, 0))}>
				<path d="M16 3v6" />
				<path d="M8 3v6" />
			</motion.g>
			<motion.path {...part(shove(-4, 0.05))} d="M12 9v6" />
			<motion.g {...part(shove(4, 0.1))}>
				<path d="M16 15v6" />
				<path d="M8 15v6" />
			</motion.g>
		</motion.g>
	),
});
