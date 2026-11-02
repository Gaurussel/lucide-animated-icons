import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const timing = { duration: 0.75, times: [0, 0.3, 0.6, 1] };

export default createAnimatedIcon({
	name: "package",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.85, 1, 1] }, timing))}
				d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(pose({ scaleY: [1, 1, 0.3, 1] }, timing))} d="M12 22V12" style={edge(0.5, 1)} />
			<motion.polyline {...part(pose({ y: [0, -3, -3, 0] }, timing))} points="3.29 7 12 12 20.71 7" />
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.6, delay: 0.15, times: [0, 0.35, 1] }))}
				d="m7.5 4.27 9 5.15"
			/>
		</>
	),
});
