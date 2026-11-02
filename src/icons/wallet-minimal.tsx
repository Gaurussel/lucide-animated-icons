import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const times = [0, 0.3, 0.65, 1];

export default createAnimatedIcon({
	name: "wallet-minimal",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -3, -3, 0], scale: [1, 1.8, 1.8, 1] }, { duration: 0.8, times }))}
				d="M17 14h.01"
				style={centered}
			/>
			<motion.path
				{...part(pose({ rotate: [0, -5, -5, 0] }, { duration: 0.8, times }))}
				d="M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"
				style={edge(0.1, 1)}
			/>
		</>
	),
});
