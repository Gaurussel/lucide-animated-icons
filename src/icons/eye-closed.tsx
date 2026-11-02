import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, rubber, snap } from "../helpers.ts";

const nod = pose({ y: [0, 3, 0], rotate: [0, -12, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "eye-closed",
	render: (part) => (
		<motion.g {...part(nod)} style={pivot(12, 12)}>
			<path d="M2 8a10.645 10.645 0 0 0 20 0" />
			<motion.path {...part(redraw(0.1, 0.45))} d="m4 15 1.726-2.05" />
			<motion.path {...part(redraw(0.15, 0.45))} d="m9 18 .722-3.25" />
			<motion.path {...part(redraw(0.2, 0.45))} d="m15 18-.722-3.25" />
			<motion.path {...part(redraw(0.25, 0.45))} d="m20 15-1.726-2.05" />
		</motion.g>
	),
});
