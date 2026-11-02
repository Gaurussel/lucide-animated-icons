import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "power",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1.5, 2.5, 0] }, { duration: 0.75, times: [0, 0.2, 0.5, 1] }))}
				d="M12 2v10"
			/>
			<motion.path
				{...part(pose({ scale: [1, 1, 0.92, 1] }, { duration: 0.75, times: [0, 0.35, 0.6, 1] }))}
				d="M18.4 6.6a9 9 0 1 1-12.77.04"
				style={pivot(12, 13)}
			/>
		</>
	),
});
