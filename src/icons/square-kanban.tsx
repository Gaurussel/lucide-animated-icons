import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const move = (delay: number) =>
	pose({ scaleY: [1, 0.45, 0.45, 1] }, { duration: 0.75, delay, times: [0, 0.35, 0.6, 1] });

export default createAnimatedIcon({
	name: "square-kanban",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.94, 1, 1] }, { duration: 0.75, times: [0, 0.25, 0.5, 1] }))}
				height="18"
				rx="2"
				style={centered}
				width="18"
				x="3"
				y="3"
			/>
			<motion.path {...part(move(0))} d="M8 7v7" style={edge(0.5, 0)} />
			<motion.path {...part(move(0.1))} d="M12 7v4" style={edge(0.5, 0)} />
			<motion.path {...part(move(0.2))} d="M16 7v9" style={edge(0.5, 0)} />
		</>
	),
});
