import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const apart = (direction: number) =>
	pose({ x: [0, 3 * direction, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "square-split-horizontal",
	render: (part) => (
		<>
			<motion.path {...part(apart(-1))} d="M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3" />
			<motion.path {...part(apart(1))} d="M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3" />
			<motion.line {...part(redraw(0.1, 0.45))} x1="12" x2="12" y1="4" y2="20" />
		</>
	),
});
