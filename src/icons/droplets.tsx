import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "droplets",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ y: [0, -2, 0], scaleY: [1, 1.1, 1] }, { duration: 0.6, times: [0, 0.4, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
			</motion.g>
			<motion.g
				{...part(
					pose({ y: [0, -2, 0], scaleY: [1, 1.1, 1] }, { duration: 0.6, delay: 0.2, times: [0, 0.4, 1] }),
				)}
				style={edge(0.5, 1)}
			>
				<path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
			</motion.g>
		</>
	),
});
