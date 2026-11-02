import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const times = [0, 0.3, 0.65, 1];

export default createAnimatedIcon({
	name: "wallet",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -2, -2, 0], rotate: [0, -6, -6, 0] }, { duration: 0.75, times }))}
				d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
				style={edge(0.2, 1)}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.94, 1, 1] }, { duration: 0.75, times: [0, 0.15, 0.5, 1] }))}
				d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
