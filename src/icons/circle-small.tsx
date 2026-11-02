import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-small",
	render: (part) => (
		<>
			<motion.circle
				{...part(pose({ scale: [1, 0.6, 1, 1] }, { duration: 0.7, times: [0, 0.3, 0.65, 1] }))}
				cx="12"
				cy="12"
				r="6"
				style={centered}
			/>
		</>
	),
});
