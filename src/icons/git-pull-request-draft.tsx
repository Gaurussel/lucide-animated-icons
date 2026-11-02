import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const node = (delay: number) => pose({ scale: [1, 0.5, 0.5, 1] }, { duration: 0.8, delay, times: [0, 0.25, 0.55, 1] });
const trace = (delay: number) =>
	pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay, times: [0, 0.25, 0.4, 1] });
const dash = (delay: number) =>
	pose({ opacity: [1, 0.1, 1, 0.1, 1] }, { duration: 0.8, delay, times: [0, 0.25, 0.5, 0.75, 1] });

export default createAnimatedIcon({
	name: "git-pull-request-draft",
	render: (part) => (
		<>
			<motion.circle {...part(node(0.25))} cx="18" cy="18" r="3" style={centered} />
			<motion.circle {...part(node(0))} cx="6" cy="6" r="3" style={centered} />
			<motion.path {...part(dash(0))} d="M18 6V5" />
			<motion.path {...part(dash(0.1))} d="M18 11v-1" />
			<motion.line {...part(trace(0.1))} x1="6" x2="6" y1="9" y2="21" />
		</>
	),
});
