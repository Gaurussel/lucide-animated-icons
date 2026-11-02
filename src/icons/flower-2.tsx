import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flower-2",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -4, 4, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
			style={pivot(12, 22)}
		>
			<motion.g
				{...part(pose({ scale: [1, 0.75, 1] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				style={pivot(12, 8)}
			>
				<path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1" />
				<circle cx="12" cy="8" r="2" />
			</motion.g>
			<path d="M12 10v12" />
			<motion.path
				{...part(pose({ rotate: [0, -8, 0] }, { duration: 0.8, delay: 0.1, times: [0, 0.5, 1] }))}
				d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"
				style={pivot(12, 22)}
			/>
			<motion.path
				{...part(pose({ rotate: [0, 8, 0] }, { duration: 0.8, delay: 0.1, times: [0, 0.5, 1] }))}
				d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"
				style={pivot(12, 22)}
			/>
		</motion.g>
	),
});
