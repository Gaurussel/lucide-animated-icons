import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const times = [0, 0.2, 0.35, 0.5, 0.7, 1];

export default createAnimatedIcon({
	name: "save",
	render: (part) => (
		<motion.g
			{...part(pose({ scaleY: [1, 0.9, 1, 1] }, { duration: 0.65, times: [0, 0.3, 0.6, 1] }))}
			style={edge(0.5, 1)}
		>
			<path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
			<motion.path
				{...part(pose({ y: [0, 0, 0, -3, 0, 0] }, { duration: 0.65, times }))}
				d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"
			/>
			<motion.path
				{...part(pose({ y: [0, 0, 2.5, 0, 0, 0] }, { duration: 0.65, times }))}
				d="M7 3v4a1 1 0 0 0 1 1h7"
			/>
		</motion.g>
	),
});
