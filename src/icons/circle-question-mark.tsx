import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] });

export default createAnimatedIcon({
	name: "circle-question-mark",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.path
				{...part(pose({ rotate: [0, -20, -20, 15, 0] }, { duration: 0.8, times: [0, 0.25, 0.45, 0.7, 1] }))}
				d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
				style={pivot(12, 13)}
			/>
			<motion.path
				{...part(pose({ y: [0, 0, -2.5, 0] }, { duration: 0.8, times: [0, 0.6, 0.8, 1] }))}
				d="M12 17h.01"
			/>
		</>
	),
});
