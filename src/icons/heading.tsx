import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, snap, springy } from "../helpers.ts";

const spread = (direction: number) =>
	pose({ x: [0, 3 * direction, 0] }, { duration: 0.7, times: [0, 0.28, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "heading",
	render: (part) => (
		<>
			<motion.path {...part(redraw(0.15, 0.5))} d="M6 12h12" />
			<motion.path {...part(spread(-1))} d="M6 20V4" />
			<motion.path {...part(spread(1))} d="M18 20V4" />
		</>
	),
});
