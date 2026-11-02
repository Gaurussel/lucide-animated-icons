import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, springy } from "../helpers.ts";

const slideIn = (y: number, delay: number) =>
	pose({ y: [0, y, 0] }, { duration: 0.55, delay, times: [0, 0.02, 1], ease: ["easeIn", springy] });

export default createAnimatedIcon({
	name: "section",
	render: (part) => (
		<>
			<motion.g {...part(slideIn(-4, 0))}>
				<motion.path {...part(redraw(0, 0.45))} d="M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0" />
			</motion.g>
			<motion.g {...part(slideIn(4, 0.12))}>
				<motion.path {...part(redraw(0.12, 0.45))} d="M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0" />
			</motion.g>
		</>
	),
});
