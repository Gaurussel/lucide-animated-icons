import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const press = (delay: number) => pose({ scaleY: [1, 0.2, 1] }, { duration: 0.3, delay });

export default createAnimatedIcon({
	name: "app-window",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.85, 0.85, 1] }, { duration: 0.7, times: [0, 0.3, 0.45, 1] }))}
			style={edge(0.5, 1)}
		>
			<rect height="16" rx="2" width="20" x="2" y="4" />
			<path d="M2 8h20" />
			<motion.path {...part(press(0.25))} d="M6 4v4" style={edge(0.5, 0)} />
			<motion.path {...part(press(0.37))} d="M10 4v4" style={edge(0.5, 0)} />
		</motion.g>
	),
});
