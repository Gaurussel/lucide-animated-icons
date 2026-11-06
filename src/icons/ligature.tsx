import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, rubber, snap } from "../helpers.ts";

const join = pose({ x: [0, 2.4, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "ligature",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0.05, 0.55))} d="M8 20V8a4 4 0 0 1 7.464-2" />
			<path d="M6 12h4" />
			<path d="M6 20h4" />
			<motion.g {...part(join)}>
				<path d="M14 12h2v8" />
				<path d="M14 20h4" />
			</motion.g>
		</>
	),
});
