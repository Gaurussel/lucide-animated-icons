import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const shift = (x: number, delay: number) =>
	pose(
		{ x: [0, -x * 0.2, x, 0] },
		{ duration: 0.65, delay, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeIn", springy] },
	);

export default createAnimatedIcon({
	name: "equal-approximately",
	render: (part) => (
		<>
			<motion.g {...part(shift(-5, 0))}>
				<motion.path {...part(redraw(0.1, 0.4))} d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
			</motion.g>
			<motion.g {...part(shift(5, 0.1))}>
				<motion.path {...part(redraw(0.2, 0.4))} d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
			</motion.g>
		</>
	),
});
