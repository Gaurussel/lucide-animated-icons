import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const open = (direction: number, delay: number) =>
	pose(
		{ x: [0, -direction, direction * 2.5, direction * 2.5, 0] },
		{ duration: 0.65, delay, times: [0, 0.15, 0.4, 0.6, 1] },
	);

export default createAnimatedIcon({
	name: "braces",
	render: (part) => (
		<>
			<motion.path
				{...part(open(-1, 0))}
				d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"
			/>
			<motion.path
				{...part(open(1, 0.06))}
				d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
			/>
		</>
	),
});
