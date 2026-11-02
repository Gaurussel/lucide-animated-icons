import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shopping-basket",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 1.5, 0, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}>
				<path d="m15 11-1 9" />
				<path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
				<path d="M4.5 15.5h15" />
				<path d="m9 11 1 9" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 0.55, 1, 1] }, { duration: 0.75, times: [0, 0.35, 0.7, 1] }))}
				style={edge(0.5, 1)}
			>
				<path d="m19 11-4-7" />
				<path d="m5 11 4-7" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, -1.5, 0, 0] }, { duration: 0.75, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M2 11h20" />
			</motion.g>
		</>
	),
});
