import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flag",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, 5, -3, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528"
				style={pivot(4, 22)}
			/>
		</>
	),
});
