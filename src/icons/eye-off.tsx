import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring } from "../helpers.ts";

const shiver = pose({ x: [0, -2.5, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: ["easeInOut", ring] });

export default createAnimatedIcon({
	name: "eye-off",
	render: (part) => (
		<>
			<motion.g {...part(shiver)}>
				<path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
				<path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
				<path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
			</motion.g>
			<motion.path {...part(redraw(0.05, 0.45))} d="m2 2 20 20" />
		</>
	),
});
