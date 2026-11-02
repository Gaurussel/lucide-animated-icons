import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "radical",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ pathLength: [1, 0, 0, 1], x: [0, -1, -1, 0] }, { duration: 0.8, times: [0, 0.35, 0.45, 1] }),
				)}
				d="M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"
			/>
		</>
	),
});
