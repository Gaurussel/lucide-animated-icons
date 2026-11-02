import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const apart = (direction: number) =>
	pose(
		{ x: [0, 3 * direction, 0], y: [0, 3 * direction, 0] },
		{ duration: 0.7, times: [0, 0.3, 1], ease: [snap, rubber] },
	);

export default createAnimatedIcon({
	name: "squares-exclude",
	render: (part) => (
		<>
			<motion.path
				{...part(apart(1))}
				d="M16 12v2a2 2 0 0 1-2 2H9a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h0"
			/>
			<motion.path
				{...part(apart(-1))}
				d="M4 16a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1h-5a2 2 0 0 0-2 2v2"
			/>
		</>
	),
});
