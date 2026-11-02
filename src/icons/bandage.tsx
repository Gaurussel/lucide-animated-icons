import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bandage",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scaleX: [1, 0.78, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={centered}
			>
				<motion.path
					{...part(pose({ opacity: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
					d="M10 10.01h.01"
				/>
				<motion.path
					{...part(
						pose({ opacity: [1, 1, 0.2, 1] }, { duration: 0.8, delay: 0.06, times: [0, 0.3, 0.6, 1] }),
					)}
					d="M10 14.01h.01"
				/>
				<motion.path
					{...part(
						pose({ opacity: [1, 1, 0.2, 1] }, { duration: 0.8, delay: 0.12, times: [0, 0.3, 0.6, 1] }),
					)}
					d="M14 10.01h.01"
				/>
				<motion.path
					{...part(
						pose({ opacity: [1, 1, 0.2, 1] }, { duration: 0.8, delay: 0.18, times: [0, 0.3, 0.6, 1] }),
					)}
					d="M14 14.01h.01"
				/>
				<path d="M18 6v11.5" />
				<path d="M6 6v12" />
				<rect height="12" rx="2" width="20" x="2" y="6" />
			</motion.g>
		</>
	),
});
