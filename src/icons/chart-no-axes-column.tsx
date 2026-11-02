import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const bars = [
	{ x: "6", y2: "14", delay: 0 },
	{ x: "12", y2: "4", delay: 0.1 },
	{ x: "18", y2: "10", delay: 0.2 },
];

export default createAnimatedIcon({
	name: "chart-no-axes-column",
	render: (part) => (
		<>
			{bars.map(({ x, y2, delay }) => (
				<motion.line
					{...part(pose({ scaleY: [1, 0.2, 0.2, 1] }, { duration: 0.5, delay, times: [0, 0.35, 0.45, 1] }))}
					key={x}
					style={edge(0.5, 1)}
					x1={x}
					x2={x}
					y1="20"
					y2={y2}
				/>
			))}
		</>
	),
});
