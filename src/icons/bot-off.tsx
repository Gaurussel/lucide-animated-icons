import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bot-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.94, 0.94, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={centered}
			>
				<path d="M13.67 8H18a2 2 0 0 1 2 2v4.33" />
				<path d="M2 14h2" />
				<path d="M20 14h2" />
				<path d="M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586" />
				<motion.path
					{...part(pose({ scaleY: [1, 1, 0.1, 1, 1] }, { duration: 0.8, times: [0, 0.4, 0.55, 0.7, 1] }))}
					d="M9 13v2"
					style={centered}
				/>
				<path d="M9.67 4H12v2.33" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.8, times: [0, 0.2, 0.4, 0.85] }))}
				d="M22 22 2 2"
			/>
		</>
	),
});
