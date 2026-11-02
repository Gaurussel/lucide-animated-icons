import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

const times = [0, 0.4, 0.65, 1];
const options = (delay: number) => ({ duration: 0.75, delay, times });

export default createAnimatedIcon({
	name: "shapes",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -2.5, -2.5, 0] }, options(0)))}
				d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
			/>
			<motion.rect
				{...part(pose({ rotate: [0, 45, 45, 0] }, options(0.1)))}
				height="7"
				rx="1"
				style={centered}
				width="7"
				x="3"
				y="14"
			/>
			<motion.circle
				{...part(pose({ scale: [1, 1.2, 1.2, 1] }, options(0.2)))}
				cx="17.5"
				cy="17.5"
				r="3.5"
				style={centered}
			/>
		</>
	),
});
