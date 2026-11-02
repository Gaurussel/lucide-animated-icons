import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "dice-6",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ y: [0, -3, -3, 0], rotate: [0, -10, 6, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }),
				)}
				style={centered}
			>
				<rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
				<motion.g
					{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.15, 0.5, 1] }))}
					style={centered}
				>
					<path d="M16 8h.01" />
				</motion.g>
				<motion.g
					{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.04, times: [0, 0.15, 0.5, 1] }))}
					style={centered}
				>
					<path d="M16 12h.01" />
				</motion.g>
				<motion.g
					{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.08, times: [0, 0.15, 0.5, 1] }))}
					style={centered}
				>
					<path d="M16 16h.01" />
				</motion.g>
				<motion.g
					{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.12, times: [0, 0.15, 0.5, 1] }))}
					style={centered}
				>
					<path d="M8 8h.01" />
				</motion.g>
				<motion.g
					{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.16, times: [0, 0.15, 0.5, 1] }))}
					style={centered}
				>
					<path d="M8 12h.01" />
				</motion.g>
				<motion.g
					{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.75, delay: 0.2, times: [0, 0.15, 0.5, 1] }))}
					style={centered}
				>
					<path d="M8 16h.01" />
				</motion.g>
			</motion.g>
		</>
	),
});
