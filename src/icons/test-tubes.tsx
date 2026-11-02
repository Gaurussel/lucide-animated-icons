import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "test-tubes",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 8, 8, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(6.5, 22)}
			>
				<path d="M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2" />
				<path d="M3 2h7" />
				<path d="M9 16H4" />
			</motion.g>
			<motion.g
				{...part(pose({ rotate: [0, -8, -8, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}
				style={pivot(17.5, 22)}
			>
				<path d="M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2" />
				<path d="M14 2h7" />
				<path d="M20 16h-5" />
			</motion.g>
		</>
	),
});
