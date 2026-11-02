import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const phase = { duration: 0.8, times: [0, 0.3, 0.7, 1] };

export default createAnimatedIcon({
	name: "frown",
	render: (part) => (
		<>
			<motion.circle {...part(pose({ y: [0, 0.8, 0.8, 0] }, phase))} cx="12" cy="12" r="10" />
			<motion.path
				{...part(pose({ y: [0, 0, 0, 0], scaleY: [1, 1.5, 1.5, 1] }, { ...phase, delay: 0.1 }))}
				d="M16 16s-1.5-2-4-2-4 2-4 2"
				style={edge(0.5, 0)}
			/>
			<motion.g {...part(pose({ y: [0, 2, 2, 0] }, phase))}>
				<line x1="9" x2="9.01" y1="9" y2="9" />
				<line x1="15" x2="15.01" y1="9" y2="9" />
			</motion.g>
		</>
	),
});
