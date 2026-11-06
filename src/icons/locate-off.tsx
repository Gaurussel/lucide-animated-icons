import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap, springy } from "../helpers.ts";

const aim = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const lost = pose({ rotate: [0, -15, 0] }, { duration: 0.7, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "locate-off",
	render: (part) => (
		<>
			<motion.path {...part(aim(3, 0))} d="M2 12h3" />
			<motion.path {...part(aim(-3, 0))} d="M19 12h3" />
			<motion.path {...part(aim(0, 3))} d="M12 2v3" />
			<motion.path {...part(aim(0, -3))} d="M12 19v3" />
			<motion.g {...part(lost)} style={pivot(12, 12)}>
				<path d="M18.89 13.24a7 7 0 0 0-8.13-8.13" />
				<path d="M7.05 7.05a7 7 0 0 0 9.9 9.9" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.45))} d="m2 2 20 20" />
		</>
	),
});
