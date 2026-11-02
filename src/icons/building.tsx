import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const windows = [
	[8, 14],
	[12, 14],
	[16, 14],
	[8, 10],
	[12, 10],
	[16, 10],
	[8, 6],
	[12, 6],
	[16, 6],
];

const light = (row: number, column: number) =>
	pose({ scale: [1, 0, 0, 1] }, { duration: 0.6, delay: 0.1 + row * 0.08 + column * 0.03, times: [0, 0.3, 0.5, 1] });

export default createAnimatedIcon({
	name: "building",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scaleY: [1, 0.88, 0.88, 1] }, { duration: 0.7, times: [0, 0.3, 0.5, 1] }))}
				height="20"
				rx="2"
				ry="2"
				style={edge(0.5, 1)}
				width="16"
				x="4"
				y="2"
			/>
			<motion.path
				{...part(pose({ scaleX: [1, 0.5, 0.5, 1] }, { duration: 0.6, times: [0, 0.3, 0.6, 1] }))}
				d="M9 22v-4h6v4"
				style={centered}
			/>
			{windows.map(([x, y]) => (
				<motion.path
					{...part(light((14 - y) / 4, (x - 8) / 4))}
					d={`M${x} ${y}h.01`}
					key={`${x}-${y}`}
					style={centered}
				/>
			))}
		</>
	),
});
