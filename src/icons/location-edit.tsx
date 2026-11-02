import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const pin = pose({ y: [0, -1.5, 0, 0, 0] }, { duration: 0.85, times: [0, 0.2, 0.4, 0.75, 1] });
const pencil = pose({ x: [0, 0, -1.5, 0, 0], y: [0, 0, 0.5, 0, 0] }, { duration: 0.85, times: [0, 0.4, 0.55, 0.7, 1] });
const dot = pose({ scale: [1, 1, 1.5, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.35, 0.5, 1] });

export default createAnimatedIcon({
	name: "location-edit",
	render: (part) => (
		<>
			<motion.g {...part(pin)}>
				<path d="M17.97 9.304A8 8 0 0 0 2 10c0 4.69 4.887 9.562 7.022 11.468" />
				<motion.circle {...part(dot)} cx="10" cy="10" r="3" style={centered} />
			</motion.g>
			<motion.path
				{...part(pencil)}
				d="M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
			/>
		</>
	),
});
