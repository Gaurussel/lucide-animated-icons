import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const line = (delay: number) => pose({ scaleX: [1, 0.1, 1] }, { duration: 0.5, delay, times: [0, 0.45, 1] });
const minus = pose({ scaleX: [1, 0.05, 1] }, { duration: 0.5, delay: 0.2, times: [0, 0.45, 1] });

export default createAnimatedIcon({
	name: "list-minus",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M16 6H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.1))} d="M11 12H3" style={edge(1, 0.5)} />
			<motion.path {...part(line(0.2))} d="M16 18H3" style={edge(1, 0.5)} />
			<motion.path {...part(minus)} d="M21 12h-6" style={centered} />
		</>
	),
});
