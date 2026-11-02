import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const task = (delay: number) =>
	pose({ x: [0, -3, -3, 0], scaleX: [1, 0.1, 0.1, 1] }, { duration: 0.55, delay, times: [0, 0.3, 0.45, 1] });

export default createAnimatedIcon({
	name: "chart-gantt",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.55, 1] }))}
				d="M3 3v16a2 2 0 0 0 2 2h16"
			/>
			<motion.path {...part(task(0.15))} d="M10 6h8" style={edge(0, 0.5)} />
			<motion.path {...part(task(0.29))} d="M8 11h7" style={edge(0, 0.5)} />
			<motion.path {...part(task(0.43))} d="M12 16h6" style={edge(0, 0.5)} />
		</>
	),
});
