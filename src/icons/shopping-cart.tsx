import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shopping-cart",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1.5, -3, 0] }, { duration: 0.75, times: [0, 0.25, 0.65, 1] }))}>
				<motion.circle
					{...part(pose({ scale: [1, 1.4, 1, 1.4, 1] }, { duration: 0.75, times: [0, 0.25, 0.5, 0.75, 1] }))}
					cx="8"
					cy="21"
					r="1"
					style={centered}
				/>
				<motion.circle
					{...part(pose({ scale: [1, 1.4, 1, 1.4, 1] }, { duration: 0.75, times: [0, 0.25, 0.5, 0.75, 1] }))}
					cx="19"
					cy="21"
					r="1"
					style={centered}
				/>
				<path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
			</motion.g>
		</>
	),
});
