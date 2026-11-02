import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, redraw, rubber, snap } from "../helpers.ts";

const stretch = (direction: number) =>
	pose({ x: [0, 4 * direction, 0] }, { duration: 0.7, times: [0, 0.22, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "link-2",
	render: (part) => (
		<>
			<motion.path {...part(stretch(-1))} d="M9 17H7A5 5 0 0 1 7 7h2" />
			<motion.path {...part(stretch(1))} d="M15 7h2a5 5 0 1 1 0 10h-2" />
			<motion.line {...part(redraw(0.15, 0.45))} x1="8" x2="16" y1="12" y2="12" />
		</>
	),
});
