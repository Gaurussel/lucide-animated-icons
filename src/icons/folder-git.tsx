import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, jelly, pose, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const node = pose(
	{ scale: [1, 1, 1.6, 1] },
	{ duration: 0.7, times: [0, 0.25, 0.45, 1], ease: ["easeInOut", snap, springy] },
);
const stretch = (direction: number) =>
	pose(
		{ x: [0, 0, 2 * direction, 0] },
		{ duration: 0.7, times: [0, 0.25, 0.45, 1], ease: ["easeInOut", snap, springy] },
	);

export default createAnimatedIcon({
	name: "folder-git",
	render: (part) => (
		<motion.g {...part(leap)}>
			<motion.path
				{...part(jelly(0.44, 0.65))}
				d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
				style={edge(0.5, 1)}
			/>
			<motion.circle {...part(node)} cx="12" cy="13" r="2" style={centered} />
			<motion.path {...part(stretch(1))} d="M14 13h3" />
			<motion.path {...part(stretch(-1))} d="M7 13h3" />
		</motion.g>
	),
});
