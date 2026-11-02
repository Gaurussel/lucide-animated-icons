import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloudy",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -2, 0], y: [0, -0.8, 0] }, { duration: 0.8, times: [0, 0.45, 1] }))}
				d="M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
			/>
			<motion.path
				{...part(pose({ x: [0, 2, 0], y: [0, 0.8, 0] }, { duration: 0.8, times: [0, 0.45, 1] }))}
				d="M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"
			/>
		</>
	),
});
