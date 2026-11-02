import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "corner-down-left",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1.5, -2.5, 0] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }))}>
				<path d="M20 4v7a4 4 0 0 1-4 4H4" />
				<motion.path
					{...part(pose({ x: [0, 0, -1.5, 0] }, { duration: 0.65, times: [0, 0.25, 0.6, 1] }))}
					d="m9 10-5 5 5 5"
				/>
			</motion.g>
		</>
	),
});
