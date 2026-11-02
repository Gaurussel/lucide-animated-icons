import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const apart = (direction: number) =>
	pose(
		{ x: [0, 3 * direction, 0], y: [0, 3 * direction, 0] },
		{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] },
	);

export default createAnimatedIcon({
	name: "squares-subtract",
	render: (part) => (
		<>
			<motion.path
				{...part(apart(-1))}
				d="M16 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-5a2 2 0 0 1 2-2h5a1 1 0 0 0 1-1z"
			/>
			<motion.g {...part(apart(1))}>
				<path d="M10 22a2 2 0 0 1-2-2" />
				<path d="M16 22h-2" />
				<path d="M20 8a2 2 0 0 1 2 2" />
				<path d="M22 14v2" />
				<path d="M22 20a2 2 0 0 1-2 2" />
			</motion.g>
		</>
	),
});
