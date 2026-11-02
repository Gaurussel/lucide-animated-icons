import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tv-minimal-play",
	render: (part) => (
		<>
			<motion.g {...part(pose({ scaleY: [1, 0.06, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))} style={centered}>
				<motion.path
					{...part(pose({ x: [0, 0, 1.2, 0] }, { duration: 0.8, times: [0, 0.5, 0.75, 1] }))}
					d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
				/>
				<rect height="14" rx="2" width="20" x="2" y="3" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleX: [1, 0.6, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				d="M7 21h10"
				style={centered}
			/>
		</>
	),
});
