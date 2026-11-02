import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cherry",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -6, 4, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
				style={pivot(12, 6)}
			/>
			<motion.path
				{...part(pose({ rotate: [0, 6, -4, 0] }, { duration: 0.8, delay: 0.08, times: [0, 0.3, 0.65, 1] }))}
				d="M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
				style={pivot(12, 6)}
			/>
			<path d="M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12" />
			<motion.path
				{...part(pose({ rotate: [0, 8, 8, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"
				style={pivot(12, 2)}
			/>
		</>
	),
});
