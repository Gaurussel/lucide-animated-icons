import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pill",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -18, -18, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				style={centered}
			>
				<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
				<motion.path
					{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] }))}
					d="m8.5 8.5 7 7"
				/>
			</motion.g>
		</>
	),
});
