import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const node = (delay: number) => pose({ scale: [1, 0.5, 0.5, 1] }, { duration: 0.8, delay, times: [0, 0.25, 0.55, 1] });
const trace = (delay: number) =>
	pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay, times: [0, 0.25, 0.4, 1] });
const cross = (delay: number) =>
	pose({ scale: [1, 0, 0, 1], rotate: [0, 90, 90, 0] }, { duration: 0.8, delay, times: [0, 0.3, 0.55, 1] });

export default createAnimatedIcon({
	name: "git-pull-request-closed",
	render: (part) => (
		<>
			<motion.circle {...part(node(0))} cx="6" cy="6" r="3" style={centered} />
			<motion.path {...part(trace(0.05))} d="M6 9v12" />
			<motion.g {...part(cross(0.15))} style={centered}>
				<path d="m21 3-6 6" />
				<path d="m21 9-6-6" />
			</motion.g>
			<motion.path {...part(trace(0.15))} d="M18 11.5V15" />
			<motion.circle {...part(node(0.25))} cx="18" cy="18" r="3" style={centered} />
		</>
	),
});
