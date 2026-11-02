import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pivot, pose } from "../helpers.ts";

const press = pose({ scaleY: [1, 0.68, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] });
const glass = (delay: number) => pose({ scaleX: [1, 0.05, 1] }, { duration: 0.35, delay, times: [0, 0.5, 1] });
const cross = pose({ scale: [1, 1, 2.4, 1] }, { duration: 0.8, times: [0, 0.4, 0.65, 1] });

export default createAnimatedIcon({
	name: "hospital",
	render: (part) => (
		<>
			<motion.g {...part(press)} style={edge(0.5, 1)}>
				<path d="M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2" />
				<path d="M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18" />
			</motion.g>
			<motion.path {...part(glass(0.2))} d="M14 14h-4" style={centered} />
			<motion.path {...part(glass(0.28))} d="M14 18h-4" style={centered} />
			<motion.g {...part(cross)} style={pivot(12, 8)}>
				<path d="M12 6v4" />
				<path d="M14 8h-4" />
			</motion.g>
		</>
	),
});
