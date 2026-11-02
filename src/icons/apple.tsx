import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "apple",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.92, 1] }, { duration: 0.75, times: [0, 0.4, 1] }))}
				d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ rotate: [0, -15, 10, 0] }, { duration: 0.75, delay: 0.15, times: [0, 0.3, 0.65, 1] }))}
				d="M10 2c1 .5 2 2 2 5"
				style={pivot(11, 7)}
			/>
		</>
	),
});
