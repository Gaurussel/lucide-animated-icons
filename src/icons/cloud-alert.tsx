import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud-alert",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.5, 1.5, -1, 0] }, { duration: 0.6, times: [0, 0.2, 0.45, 0.7, 1] }))}
				d="M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0, 0, 1, 1] }, { duration: 0.75, times: [0, 0.2, 0.3, 0.65, 1] }))}
				d="M12 12v4"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.2, 0.65, 1] }))}
				d="M12 20h.01"
				style={centered}
			/>
		</>
	),
});
