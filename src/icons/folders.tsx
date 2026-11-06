import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const shuffle = pose(
	{ x: [0, 1.2, 0, 0], y: [0, -3, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const nudge = pose(
	{ x: [0, 0, -0.9, 0], y: [0, 0, 0.9, 0] },
	{ duration: 0.65, times: [0, 0.3, 0.44, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "folders",
	render: (part) => (
		<>
			<motion.g {...part(shuffle)}>
				<motion.path
					{...part(jelly(0.44, 0.65))}
					d="M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
					style={edge(0.5, 1)}
				/>
			</motion.g>
			<motion.path {...part(nudge)} d="M2 8v11a2 2 0 0 0 2 2h14" />
		</>
	),
});
