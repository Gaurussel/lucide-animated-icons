import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const jab = pose(
	{ x: [0, 0, -2, 4, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.28, 0.42, 1], ease: ["easeInOut", "easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "folder-symlink",
	render: (part) => (
		<motion.g {...part(leap)}>
			<motion.path
				{...part(jelly(0.44, 0.65))}
				d="M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(jab)} d="m8 16 3-3-3-3" />
		</motion.g>
	),
});
