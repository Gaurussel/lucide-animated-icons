import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose } from "../helpers.ts";

const press = pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] });
const sun = pose({ y: [0, 1.5, -2, 0] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] });

export default createAnimatedIcon({
	name: "image-minus",
	render: (part) => (
		<>
			<motion.g {...part(press)} style={pivot(3, 21)}>
				<path d="M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
				<motion.circle {...part(sun)} cx="9" cy="9" r="2" />
				<path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
			</motion.g>
			<motion.line
				{...part(pose({ scaleX: [1, 1, 0.3, 1] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }))}
				style={centered}
				x1="16"
				x2="22"
				y1="5"
				y2="5"
			/>
		</>
	),
});
