import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "triangle-right",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ rotate: [0, -10, -10, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }))}
				d="M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"
				style={pivot(21, 19)}
			/>
		</>
	),
});
