import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const plug = pose({ y: [0, 1, -3, -3, 0] }, { duration: 0.8, times: [0, 0.18, 0.5, 0.7, 1] });
const line = pose({ pathLength: [1, 1, 0, 1, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.4, 0.55, 0.8, 1] });

export default createAnimatedIcon({
	name: "hdmi-port",
	render: (part) => (
		<motion.g {...part(plug)}>
			<path d="M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z" />
			<motion.path {...part(line)} d="M7.5 12h9" />
		</motion.g>
	),
});
