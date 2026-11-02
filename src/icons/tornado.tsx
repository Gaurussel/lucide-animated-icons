import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tornado",
	render: (part) => (
		<>
			<motion.path {...part(pose({ x: [0, 5, 0] }, { duration: 0.5, times: [0, 0.5, 1] }))} d="M21 4H3" />
			<motion.path
				{...part(pose({ x: [0, -5, 0] }, { duration: 0.5, delay: 0.07, times: [0, 0.5, 1] }))}
				d="M18 8H6"
			/>
			<motion.path
				{...part(pose({ x: [0, 5, 0] }, { duration: 0.5, delay: 0.14, times: [0, 0.5, 1] }))}
				d="M19 12H9"
			/>
			<motion.path
				{...part(pose({ x: [0, -5, 0] }, { duration: 0.5, delay: 0.21, times: [0, 0.5, 1] }))}
				d="M16 16h-6"
			/>
			<motion.path
				{...part(pose({ x: [0, 5, 0] }, { duration: 0.5, delay: 0.28, times: [0, 0.5, 1] }))}
				d="M11 20H9"
			/>
		</>
	),
});
