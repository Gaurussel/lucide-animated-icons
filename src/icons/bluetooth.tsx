import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bluetooth",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0.1, 1], scale: [1, 0.9, 1] }, { duration: 0.8, times: [0, 0.35, 1] }))}
				d="m7 7 10 10-5 5V2l5 5L7 17"
				style={centered}
			/>
		</>
	),
});
