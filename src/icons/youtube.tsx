import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "youtube",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.93, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
				d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
				style={centered}
			/>
			<motion.path
				{...part(pose({ x: [0, -1.5, 2, 0] }, { duration: 0.8, times: [0, 0.2, 0.6, 1] }))}
				d="m10 15 5-3-5-3z"
			/>
		</>
	),
});
