import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "door-closed",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 0.55, 0.55, 1] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
				style={edge(0, 0.5)}
			>
				<path d="M10 12h.01" />
				<path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
			</motion.g>
			<path d="M2 20h20" />
		</>
	),
});
