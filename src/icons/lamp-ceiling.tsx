import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const swing = pose({ rotate: [0, 7, -5, 0] }, { duration: 0.85, times: [0, 0.3, 0.65, 1] });
const glow = pose({ opacity: [1, 1, 0.35, 1] }, { duration: 0.85, times: [0, 0.5, 0.7, 1] });

export default createAnimatedIcon({
	name: "lamp-ceiling",
	render: (part) => (
		<motion.g {...part(swing)} style={pivot(12, 2)}>
			<path d="M12 2v5" />
			<motion.path {...part(glow)} d="M14.829 15.998a3 3 0 1 1-5.658 0" />
			<path d="M20.92 14.606A1 1 0 0 1 20 16H4a1 1 0 0 1-.92-1.394l3-7A1 1 0 0 1 7 7h10a1 1 0 0 1 .92.606z" />
		</motion.g>
	),
});
