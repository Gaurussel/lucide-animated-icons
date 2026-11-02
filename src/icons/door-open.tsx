import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "door-open",
	render: (part) => (
		<>
			<path d="M11 20H2" />
			<motion.g
				{...part(pose({ scaleX: [1, 0.5, 0.5, 1] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
				style={edge(1, 0.5)}
			>
				<path d="M11 4.562v16.157a1 1 0 0 0 1.242.97L19 20V5.562a2 2 0 0 0-1.515-1.94l-4-1A2 2 0 0 0 11 4.561z" />
				<path d="M14 12h.01" />
			</motion.g>
			<path d="M11 4H8a2 2 0 0 0-2 2v14" />
			<path d="M22 20h-3" />
		</>
	),
});
