import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "train-track",
	render: (part) => (
		<>
			<path d="M2 17 17 2" />
			<motion.path
				{...part(pose({ x: [0, 2.6, 0], y: [0, -2.6, 0] }, { duration: 0.45, times: [0, 0.5, 1] }))}
				d="m2 14 8 8"
			/>
			<motion.path
				{...part(
					pose({ x: [0, 2.6, 0], y: [0, -2.6, 0] }, { duration: 0.45, delay: 0.09, times: [0, 0.5, 1] }),
				)}
				d="m5 11 8 8"
			/>
			<motion.path
				{...part(
					pose({ x: [0, 2.6, 0], y: [0, -2.6, 0] }, { duration: 0.45, delay: 0.18, times: [0, 0.5, 1] }),
				)}
				d="m8 8 8 8"
			/>
			<motion.path
				{...part(
					pose({ x: [0, 2.6, 0], y: [0, -2.6, 0] }, { duration: 0.45, delay: 0.27, times: [0, 0.5, 1] }),
				)}
				d="m11 5 8 8"
			/>
			<motion.path
				{...part(
					pose({ x: [0, 2.6, 0], y: [0, -2.6, 0] }, { duration: 0.45, delay: 0.36, times: [0, 0.5, 1] }),
				)}
				d="m14 2 8 8"
			/>
			<path d="M7 22 22 7" />
		</>
	),
});
