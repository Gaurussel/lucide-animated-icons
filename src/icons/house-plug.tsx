import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const plug = pose(
	{ y: [0, 4, -1, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.36, 1], ease: ["easeInOut", snap, springy] },
);
const jolt = pose(
	{ y: [0, 0, -2.5, 0] },
	{ duration: 0.75, times: [0, 0.34, 0.46, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "house-plug",
	render: (part) => (
		<>
			<motion.g {...part(jolt)}>
				<motion.path
					{...part(jelly(0.46, 0.75))}
					d="M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"
					style={edge(0.5, 1)}
				/>
			</motion.g>
			<motion.g {...part(plug)}>
				<path d="M10 12V8.964" />
				<path d="M14 12V8.964" />
				<path d="M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z" />
			</motion.g>
		</>
	),
});
