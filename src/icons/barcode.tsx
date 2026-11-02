import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "barcode",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.2, 1] }, { duration: 0.7, times: [0, 0.35, 1] }))}
				d="M3 5v14"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.2, 1] }, { duration: 0.7, delay: 0.09, times: [0, 0.35, 1] }))}
				d="M8 5v14"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.2, 1] }, { duration: 0.7, delay: 0.18, times: [0, 0.35, 1] }))}
				d="M12 5v14"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.2, 1] }, { duration: 0.7, delay: 0.27, times: [0, 0.35, 1] }))}
				d="M17 5v14"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.2, 1] }, { duration: 0.7, delay: 0.36, times: [0, 0.35, 1] }))}
				d="M21 5v14"
				style={centered}
			/>
		</>
	),
});
