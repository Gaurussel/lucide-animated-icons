import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const flip = pose({ rotate: [0, -12, 360] }, { duration: 0.9, times: [0, 0.2, 1], reset: true });
const bar = pose({ scaleX: [1, 0.8, 1, 1] }, { duration: 0.9, times: [0, 0.2, 0.45, 1] });

export default createAnimatedIcon({
	name: "hourglass",
	render: (part) => (
		<motion.g {...part(flip)} style={pivot(12, 12)}>
			<motion.path {...part(bar)} d="M5 22h14" style={centered} />
			<motion.path {...part(bar)} d="M5 2h14" style={centered} />
			<path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
			<path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
		</motion.g>
	),
});
