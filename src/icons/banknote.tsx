import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "banknote",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -1.5, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<rect height="12" rx="2" width="20" x="2" y="6" />
				<motion.path
					{...part(pose({ opacity: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
					d="M6 12h.01M18 12h.01"
				/>
			</motion.g>
			<motion.circle
				{...part(pose({ scaleX: [1, 0.1, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				cx="12"
				cy="12"
				r="2"
				style={centered}
			/>
		</>
	),
});
