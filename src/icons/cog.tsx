import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cog",
	render: (part) => (
		<motion.g
			{...part(pose({ rotate: [0, -14, 360] }, { duration: 0.85, times: [0, 0.2, 1], reset: true }))}
			style={pivot(12, 12)}
		>
			<path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
			<motion.path
				{...part(pose({ scale: [1, 1, 0.7, 1] }, { duration: 0.85, times: [0, 0.3, 0.6, 1] }))}
				d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
				style={centered}
			/>
			<path d="M12 2v2" />
			<path d="M12 22v-2" />
			<path d="m17 20.66-1-1.73" />
			<path d="M11 10.27 7 3.34" />
			<path d="m20.66 17-1.73-1" />
			<path d="m3.34 7 1.73 1" />
			<path d="M14 12h8" />
			<path d="M2 12h2" />
			<path d="m20.66 7-1.73 1" />
			<path d="m3.34 17 1.73-1" />
			<path d="m17 3.34-1 1.73" />
			<path d="m11 13.73-4 6.93" />
		</motion.g>
	),
});
