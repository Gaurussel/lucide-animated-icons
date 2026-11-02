import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "space",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ y: [0, -1, 1.5, 0], scaleX: [1, 1, 0.94, 1] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] }),
				)}
				style={centered}
			>
				<path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
			</motion.g>
		</>
	),
});
