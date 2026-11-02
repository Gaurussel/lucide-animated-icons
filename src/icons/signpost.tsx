import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "signpost",
	render: (part) => (
		<>
			<path d="M12 13v8" />
			<motion.g {...part(pose({ y: [0, 1.5, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M12 3v3" />
			</motion.g>
			<motion.g
				{...part(pose({ rotate: [0, -8, 6, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}
				style={pivot(12, 9.5)}
			>
				<path d="M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z" />
			</motion.g>
		</>
	),
});
