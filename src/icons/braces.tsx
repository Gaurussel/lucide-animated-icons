import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const spread = (direction: number) =>
	pose({ x: [0, 4 * direction, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "braces",
	render: (part) => (
		<>
			<motion.path
				{...part(spread(-1))}
				d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"
			/>
			<motion.path
				{...part(spread(1))}
				d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
			/>
		</>
	),
});
