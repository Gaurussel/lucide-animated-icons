import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const unfurl = (direction: number, delay: number) =>
	pose(
		{ rotate: [0, 35 * direction, -14 * direction, 0] },
		{ duration: 0.6, delay, times: [0, 0.2, 0.45, 1], ease: ["easeInOut", snap, ring] },
	);

export default createAnimatedIcon({
	name: "sprout",
	render: (part) => (
		<>
			<path d="M7 20h10" />
			<motion.path {...part(redraw(0, 0.4))} d="M10 20c5.5-2.5.8-6.4 3-10" />
			<motion.path
				{...part(unfurl(1, 0.1))}
				d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
				style={pivot(12, 13)}
			/>
			<motion.path
				{...part(unfurl(-1, 0.18))}
				d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
				style={pivot(13, 10)}
			/>
		</>
	),
});
