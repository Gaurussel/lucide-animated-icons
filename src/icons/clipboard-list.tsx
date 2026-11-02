import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pivot, pose } from "../helpers.ts";

const dot = (delay: number) => pose({ scale: [1, 0, 0, 1] }, { duration: 0.45, delay, times: [0, 0.3, 0.4, 1] });
const row = (delay: number) => pose({ scaleX: [1, 0, 0, 1] }, { duration: 0.45, delay, times: [0, 0.3, 0.4, 1] });

export default createAnimatedIcon({
	name: "clipboard-list",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -8, -8, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(12, 22)}
		>
			<motion.rect
				{...part(pose({ y: [0, 1.5, 0] }, { duration: 0.35, times: [0, 0.4, 1] }))}
				height="4"
				rx="1"
				ry="1"
				width="8"
				x="8"
				y="2"
			/>
			<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
			<motion.path {...part(dot(0.15))} d="M8 11h.01" style={centered} />
			<motion.path {...part(row(0.22))} d="M12 11h4" style={edge(0, 0.5)} />
			<motion.path {...part(dot(0.3))} d="M8 16h.01" style={centered} />
			<motion.path {...part(row(0.37))} d="M12 16h4" style={edge(0, 0.5)} />
		</motion.g>
	),
});
