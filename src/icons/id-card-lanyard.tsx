import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pivot, pose } from "../helpers.ts";

const swing = pose({ rotate: [0, 7, -5, 0] }, { duration: 0.85, times: [0, 0.3, 0.65, 1] });
const photo = pose({ scale: [1, 1, 0.8, 1] }, { duration: 0.85, times: [0, 0.3, 0.55, 1] });
const name = pose({ scaleX: [1, 1, 0.3, 1] }, { duration: 0.85, times: [0, 0.4, 0.65, 1] });

export default createAnimatedIcon({
	name: "id-card-lanyard",
	render: (part) => (
		<motion.g {...part(swing)} style={pivot(12, 2)}>
			<motion.path {...part(name)} d="M13.5 8h-3" style={edge(0, 0.5)} />
			<path d="m15 2-1 2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3" />
			<path d="M16.899 22A5 5 0 0 0 7.1 22" />
			<path d="m9 2 3 6" />
			<motion.circle {...part(photo)} cx="12" cy="15" r="3" style={centered} />
		</motion.g>
	),
});
