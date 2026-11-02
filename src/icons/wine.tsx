import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "wine",
	render: (part) => (
		<>
			<path d="M8 22h8" />
			<motion.g
				{...part(pose({ rotate: [0, -10, 6, 0] }, { duration: 0.85, times: [0, 0.3, 0.7, 1] }))}
				style={pivot(12, 22)}
			>
				<motion.path
					{...part(pose({ rotate: [0, 12, -8, 0] }, { duration: 0.85, times: [0, 0.3, 0.7, 1] }))}
					d="M7 10h10"
					style={centered}
				/>
				<path d="M12 15v7" />
				<path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
			</motion.g>
		</>
	),
});
