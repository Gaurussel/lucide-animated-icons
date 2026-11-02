import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "saudi-riyal",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, -1.2, 1.8, 0] }, { duration: 0.7, times: [0, 0.15, 0.5, 1] }))}
				d="M20 10 4 13.5"
			/>
			<motion.path
				{...part(pose({ x: [0, -1.2, 1.2, 0] }, { duration: 0.7, times: [0, 0.27, 0.6, 1] }))}
				d="m20 19.5-5.5 1.2"
			/>
			<motion.path
				{...part(pose({ y: [0, 1, -1.5, 0, 0] }, { duration: 0.7, times: [0, 0.1, 0.4, 0.8, 1] }))}
				d="M14.5 4v11.22a1 1 0 0 0 1.242.97L20 15.2"
			/>
			<motion.path
				{...part(pose({ y: [0, -1, 1.5, 0, 0] }, { duration: 0.7, times: [0, 0.2, 0.5, 0.9, 1] }))}
				d="m2.978 19.351 5.549-1.363A2 2 0 0 0 10 16V2"
			/>
		</>
	),
});
