import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const rise = (delay: number) =>
	pose(
		{ y: [0, 0, -1.8, 0] },
		{ duration: 0.45, delay, times: [0, 0.4, 0.6, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "rainbow",
	render: (part) => (
		<>
			<motion.g {...part(rise(0.26))}>
				<motion.path {...part(redraw(0.16, 0.35))} d="M22 17a10 10 0 0 0-20 0" />
			</motion.g>
			<motion.g {...part(rise(0.16))}>
				<motion.path {...part(redraw(0.08, 0.35))} d="M6 17a6 6 0 0 1 12 0" />
			</motion.g>
			<motion.g {...part(rise(0.06))}>
				<motion.path {...part(redraw(0, 0.35))} d="M10 17a2 2 0 0 1 4 0" />
			</motion.g>
		</>
	),
});
