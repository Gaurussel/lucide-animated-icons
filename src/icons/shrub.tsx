import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shrub",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -4, 3, 0] }, { duration: 0.85, times: [0, 0.3, 0.7, 1] }))}
				style={pivot(12, 20)}
			>
				<path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" />
				<path d="M14.5 14.5 12 17" />
				<motion.g
					{...part(pose({ scale: [1, 0.85, 1, 1] }, { duration: 0.85, times: [0, 0.3, 0.6, 1] }))}
					style={edge(0.5, 1)}
				>
					<path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z" />
				</motion.g>
			</motion.g>
		</>
	),
});
