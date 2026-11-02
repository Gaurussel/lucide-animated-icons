import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bean",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -12, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"
				style={centered}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M5.341 10.62a4 4 0 1 0 5.279-5.28"
			/>
		</>
	),
});
