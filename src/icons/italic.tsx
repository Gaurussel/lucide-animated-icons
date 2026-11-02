import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

const timing = { duration: 0.7, times: [0, 0.4, 0.65, 1] };

export default createAnimatedIcon({
	name: "italic",
	render: (part) => (
		<>
			<motion.line {...part(pose({ x: [0, 2.5, 2.5, 0] }, timing))} x1="19" x2="10" y1="4" y2="4" />
			<motion.line {...part(pose({ x: [0, -2.5, -2.5, 0] }, timing))} x1="14" x2="5" y1="20" y2="20" />
			<motion.line
				{...part(pose({ rotate: [0, 10, 10, 0] }, timing))}
				style={pivot(12, 12)}
				x1="15"
				x2="9"
				y1="4"
				y2="20"
			/>
		</>
	),
});
