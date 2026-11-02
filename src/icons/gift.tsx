import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const phase = { duration: 0.85, times: [0, 0.2, 0.5, 0.7, 1] };

export default createAnimatedIcon({
	name: "gift",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ y: [0, 0.6, -2.5, -2.5, 0], rotate: [0, 0, -10, -10, 0] }, phase))}
				style={edge(0, 1)}
			>
				<rect height="4" rx="1" width="18" x="3" y="8" />
				<path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
			</motion.g>
			<motion.path {...part(pose({ scaleY: [1, 1, 0.7, 0.7, 1] }, phase))} d="M12 8v13" style={edge(0.5, 1)} />
			<motion.path
				{...part(pose({ scaleY: [1, 0.97, 1, 1, 1] }, phase))}
				d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
