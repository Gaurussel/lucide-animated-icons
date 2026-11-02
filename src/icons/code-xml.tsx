import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const push = (x: number) => pose({ x: [0, x, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "code-xml",
	render: (part) => (
		<>
			<motion.path {...part(push(4))} d="m18 16 4-4-4-4" />
			<motion.path {...part(push(-4))} d="m6 8-4 4 4 4" />
			<motion.path {...part(redraw(0.1, 0.4))} d="m14.5 4-5 16" />
		</>
	),
});
