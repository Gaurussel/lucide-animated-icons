import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const spread = (direction: number) =>
	pose(
		{ x: [0, 0, 2.5 * direction, 0] },
		{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "folder-code",
	render: (part) => (
		<motion.g {...part(leap)}>
			<motion.path
				{...part(jelly(0.44, 0.65))}
				d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(spread(-1))} d="M10 10.5 8 13l2 2.5" />
			<motion.path {...part(spread(1))} d="m14 10.5 2 2.5-2 2.5" />
		</motion.g>
	),
});
