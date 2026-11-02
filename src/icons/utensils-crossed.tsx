import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "utensils-crossed",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 8, 8, 0] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] }))}
				style={pivot(12, 12)}
			>
				<path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8" />
				<path d="m19 5-7 7" />
			</motion.g>
			<motion.g
				{...part(pose({ rotate: [0, -8, -8, 0] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] }))}
				style={pivot(12, 12)}
			>
				<path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7" />
				<path d="m2.1 21.8 6.4-6.3" />
			</motion.g>
		</>
	),
});
