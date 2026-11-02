import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const node = (delay: number) => pose({ scale: [1, 0.5, 0.5, 1] }, { duration: 0.8, delay, times: [0, 0.25, 0.55, 1] });
const trace = (delay: number) =>
	pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, delay, times: [0, 0.25, 0.4, 1] });

export default createAnimatedIcon({
	name: "git-commit-vertical",
	render: (part) => (
		<>
			<motion.path {...part(trace(0))} d="M12 3v6" />
			<motion.circle {...part(node(0.15))} cx="12" cy="12" r="3" style={centered} />
			<motion.path {...part(trace(0.05))} d="M12 15v6" />
		</>
	),
});
