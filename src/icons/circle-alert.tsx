import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.7, times: [0, 0.25, 0.5, 1] });

export default createAnimatedIcon({
	name: "circle-alert",
	render: (part) => (
		<>
			<motion.circle {...part(press)} cx="12" cy="12" r="10" style={centered} />
			<motion.line
				{...part(pose({ scaleY: [1, 0, 0, 1, 1] }, { duration: 0.7, times: [0, 0.2, 0.3, 0.65, 1] }))}
				style={edge(0.5, 0)}
				x1="12"
				x2="12"
				y1="8"
				y2="12"
			/>
			<motion.line
				{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.65, 1] }))}
				style={centered}
				x1="12"
				x2="12.01"
				y1="16"
				y2="16"
			/>
		</>
	),
});
