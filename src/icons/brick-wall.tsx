import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "brick-wall",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.94, 0.94, 1] }, { duration: 0.75, times: [0, 0.35, 0.65, 1] }))}
			style={centered}
		>
			<rect height="18" rx="2" width="18" x="3" y="3" />
			<motion.path
				{...part(pose({ x: [0, -2.5, -2.5, 0] }, { duration: 0.75, delay: 0.08, times: [0, 0.35, 0.65, 1] }))}
				d="M12 9v6"
			/>
			<motion.g
				{...part(pose({ x: [0, 2.5, 2.5, 0] }, { duration: 0.75, delay: 0.16, times: [0, 0.35, 0.65, 1] }))}
			>
				<path d="M16 15v6" />
				<path d="M8 15v6" />
			</motion.g>
			<motion.g {...part(pose({ x: [0, 2.5, 2.5, 0] }, { duration: 0.75, times: [0, 0.35, 0.65, 1] }))}>
				<path d="M16 3v6" />
				<path d="M8 3v6" />
			</motion.g>
			<path d="M3 15h18" />
			<path d="M3 9h18" />
		</motion.g>
	),
});
