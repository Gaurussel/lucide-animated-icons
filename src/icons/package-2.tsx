import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "package-2",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.88, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M16.76 3a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3z"
				style={edge(0.5, 1)}
			/>
			<motion.g {...part(pose({ y: [0, -3, -3, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M12 3v6" />
				<path d="M3.054 9.013h17.893" />
			</motion.g>
		</>
	),
});
