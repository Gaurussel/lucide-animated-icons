import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, rubber, snap } from "../helpers.ts";

const refuse = pose({ x: [0, -2.5, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "bluetooth-off",
	render: (part) => (
		<>
			<motion.g {...part(refuse)}>
				<path d="m17 17-5 5V12l-5 5" />
				<path d="M14.5 9.5 17 7l-5-5v4.5" />
			</motion.g>
			<motion.path {...part(redraw(0.1, 0.45))} d="m2 2 20 20" />
		</>
	),
});
