import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "badge",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ rotate: [0, -12, 0, 0], scale: [1, 1, 0.9, 1] }, { duration: 0.7, times: [0, 0.4, 0.7, 1] }),
				)}
				d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
				style={centered}
			/>
		</>
	),
});
