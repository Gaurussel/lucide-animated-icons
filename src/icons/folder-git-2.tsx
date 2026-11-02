import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const body = pose({ y: [0, -2, -2, 0], rotate: [0, -4, -4, 0] }, { duration: 0.85, times: [0, 0.3, 0.65, 1] });
const node = (delay: number) => pose({ scale: [1, 0.4, 0.4, 1] }, { duration: 0.85, delay, times: [0, 0.25, 0.55, 1] });

export default createAnimatedIcon({
	name: "folder-git-2",
	render: (part) => (
		<motion.g {...part(body)} style={edge(0.5, 1)}>
			<path d="M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5" />
			<motion.circle {...part(node(0))} cx="13" cy="12" r="2" style={centered} />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.85, times: [0, 0.25, 0.4, 0.85] }))}
				d="M18 19c-2.8 0-5-2.2-5-5v8"
			/>
			<motion.circle {...part(node(0.1))} cx="20" cy="19" r="2" style={centered} />
		</motion.g>
	),
});
