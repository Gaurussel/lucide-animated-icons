import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, rubber, snap, springy } from "../helpers.ts";

const wrap = pose({ x: [0, -3, 0] }, { duration: 0.7, delay: 0.1, times: [0, 0.3, 1], ease: [snap, springy] });
const drop = pose({ y: [0, 1.8, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const push = pose({ x: [0, 1.8, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "wrap-text",
	render: (part) => (
		<>
			<motion.g {...part(drop)}>
				<motion.path {...part(wrap)} d="m16 16-2 2 2 2" />
				<motion.path {...part(redraw(0, 0.5))} d="M3 12h15a3 3 0 1 1 0 6h-4" />
				<motion.path {...part(redraw(0.15, 0.45))} d="M3 18h7" />
			</motion.g>
			<motion.path {...part(push)} d="M3 6h18" />
		</>
	),
});
