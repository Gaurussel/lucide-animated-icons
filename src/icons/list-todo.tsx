import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const line = (delay: number) => pose({ scaleX: [1, 0.2, 1] }, { duration: 0.4, delay });

export default createAnimatedIcon({
	name: "list-todo",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.55, 1] }, { duration: 0.35 }))}
				height="6"
				rx="1"
				style={centered}
				width="6"
				x="3"
				y="5"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1] }, { duration: 0.4, delay: 0.35, times: [0, 0.35, 1] }))}
				d="m3 17 2 2 4-4"
			/>
			<motion.path {...part(line(0.1))} d="M13 6h8" style={edge(0, 0.5)} />
			<motion.path {...part(line(0.25))} d="M13 12h8" style={edge(0, 0.5)} />
			<motion.path {...part(line(0.5))} d="M13 18h8" style={edge(0, 0.5)} />
		</>
	),
});
