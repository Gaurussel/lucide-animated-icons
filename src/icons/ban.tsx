import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, rubber, snap } from "../helpers.ts";

const refuse = pose({ x: [0, -2.5, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "ban",
	render: (part) => (
		<motion.g {...part(refuse)}>
			<circle cx="12" cy="12" r="10" />
			<motion.path {...part(redraw(0.1, 0.45))} d="m4.9 4.9 14.2 14.2" />
		</motion.g>
	),
});
