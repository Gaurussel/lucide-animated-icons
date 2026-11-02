import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "barrel",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 0.82, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={centered}
			>
				<path d="M10 3a41 41 0 0 0 0 18" />
				<path d="M14 3a41 41 0 0 1 0 18" />
				<path d="M17 3a2 2 0 0 1 1.68.92 15.25 15.25 0 0 1 0 16.16A2 2 0 0 1 17 21H7a2 2 0 0 1-1.68-.92 15.25 15.25 0 0 1 0-16.16A2 2 0 0 1 7 3z" />
				<motion.path
					{...part(pose({ y: [0, 0, 2, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
					d="M3.84 17h16.32"
				/>
				<motion.path
					{...part(pose({ y: [0, 0, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
					d="M3.84 7h16.32"
				/>
			</motion.g>
		</>
	),
});
