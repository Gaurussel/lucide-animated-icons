import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const node = (delay: number) => pose({ scale: [1, 0.5, 0.5, 1] }, { duration: 0.8, delay, times: [0, 0.25, 0.55, 1] });
const trace = (delay: number) =>
	pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay, times: [0, 0.25, 0.4, 1] });

export default createAnimatedIcon({
	name: "git-graph",
	render: (part) => (
		<>
			<motion.circle {...part(node(0))} cx="5" cy="6" r="3" style={centered} />
			<motion.path {...part(trace(0.1))} d="M5 9v6" />
			<motion.circle {...part(node(0.2))} cx="5" cy="18" r="3" style={centered} />
			<motion.path {...part(trace(0))} d="M12 3v18" />
			<motion.circle {...part(node(0.3))} cx="19" cy="6" r="3" style={centered} />
			<motion.path {...part(trace(0.2))} d="M16 15.7A9 9 0 0 0 19 9" />
		</>
	),
});
