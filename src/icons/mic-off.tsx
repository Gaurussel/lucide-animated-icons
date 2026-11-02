import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mic-off",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -8, 6, 0] }, { duration: 0.75, times: [0, 0.3, 0.65, 1] }))}
				style={pivot(12, 22)}
			>
				<path d="M18.89 13.23A7.12 7.12 0 0 0 19 12v-2" />
				<path d="M5 10v2a7 7 0 0 0 12 5" />
				<motion.path
					{...part(pose({ y: [0, 0, 1.2, 0] }, { duration: 0.75, times: [0, 0.35, 0.6, 1] }))}
					d="M15 9.34V5a3 3 0 0 0-5.68-1.33"
				/>
				<motion.path
					{...part(pose({ y: [0, 0, 1.2, 0] }, { duration: 0.75, times: [0, 0.35, 0.6, 1] }))}
					d="M9 9v3a3 3 0 0 0 5.12 2.12"
				/>
				<line x1="12" x2="12" y1="19" y2="22" />
			</motion.g>
			<motion.line
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.3, 0.5, 1] }))}
				x1="2"
				x2="22"
				y1="2"
				y2="22"
			/>
		</>
	),
});
