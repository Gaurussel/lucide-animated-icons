import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

const tilt = pose({ rotate: [0, -16, 16, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] });
const base = pose({ scaleY: [1, 1, 0.94, 1] }, { duration: 0.8, times: [0, 0.3, 0.5, 1] });
const button = pose({ scaleY: [1, 0.6, 1] }, { duration: 0.8, times: [0, 0.7, 1] });

export default createAnimatedIcon({
	name: "joystick",
	render: (part) => (
		<>
			<motion.path
				{...part(base)}
				d="M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(button)} d="M6 15v-2" style={edge(0.5, 1)} />
			<motion.g {...part(tilt)} style={pivot(12, 15)}>
				<path d="M12 15V9" />
				<circle cx="12" cy="6" r="3" />
			</motion.g>
		</>
	),
});
