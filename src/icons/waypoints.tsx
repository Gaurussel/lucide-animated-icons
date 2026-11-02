import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const node = (delay: number) => pose({ scale: [1, 1.7, 1] }, { duration: 0.45, delay, times: [0, 0.4, 1] });
const link = (delay: number) => pose({ pathLength: [1, 0, 1] }, { duration: 0.45, delay, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "waypoints",
	render: (part) => (
		<>
			<motion.circle {...part(node(0))} cx="12" cy="4.5" r="2.5" style={centered} />
			<motion.path {...part(link(0.08))} d="m10.2 6.3-3.9 3.9" />
			<motion.circle {...part(node(0.16))} cx="4.5" cy="12" r="2.5" style={centered} />
			<motion.path {...part(link(0.24))} d="M7 12h10" />
			<motion.circle {...part(node(0.32))} cx="19.5" cy="12" r="2.5" style={centered} />
			<motion.path {...part(link(0.4))} d="m13.8 17.7 3.9-3.9" />
			<motion.circle {...part(node(0.48))} cx="12" cy="19.5" r="2.5" style={centered} />
		</>
	),
});
