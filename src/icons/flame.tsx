import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flame",
	render: (part) => (
		<motion.path
			{...part(
				pose(
					{
						scaleX: [1, 1.05, 0.93, 1.03, 0.97, 1],
						scaleY: [1, 0.94, 1.12, 0.97, 1.06, 1],
						rotate: [0, -3, 3, -2, 1.5, 0],
					},
					{ duration: 0.85 },
				),
			)}
			d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
			style={edge(0.5, 1)}
		/>
	),
});
