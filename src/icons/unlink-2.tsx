import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "unlink-2",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 0.94, 1.14, 1.14, 1] }, { duration: 0.8, times: [0, 0.15, 0.5, 0.7, 1] }))}
				d="M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"
				style={centered}
			/>
		</>
	),
});
