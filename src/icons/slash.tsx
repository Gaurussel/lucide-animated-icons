import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "slash",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ x: [0, 3, -4, 0], y: [0, 3, -4, 0] }, { duration: 0.7, times: [0, 0.25, 0.65, 1] }))}
			>
				<path d="M22 2 2 22" />
			</motion.g>
		</>
	),
});
