import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, ring } from "../helpers.ts";

const press = pose(
	{ y: [0, -0.9, 1.8, 0] },
	{ duration: 0.65, times: [0, 0.15, 0.3, 1], ease: ["easeInOut", "easeIn", ring] },
);

export default createAnimatedIcon({
	name: "space",
	render: (part) => (
		<motion.g {...part(press)}>
			<motion.path {...part(redraw(0.22, 0.45))} d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
		</motion.g>
	),
});
