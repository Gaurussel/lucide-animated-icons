import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mail-plus",
	render: (part) => (
		<>
			<path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
			<motion.path
				{...part(pose({ scaleY: [1, -0.8, -0.8, 1] }, { duration: 0.7, times: [0, 0.45, 0.6, 1] }))}
				d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.2, 0.2, 1] }, { duration: 0.7, times: [0, 0.45, 0.6, 1] }))}
				d="M16 19h6"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.2, 0.2, 1] }, { duration: 0.7, times: [0, 0.55, 0.7, 1] }))}
				d="M19 16v6"
				style={centered}
			/>
		</>
	),
});
