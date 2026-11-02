import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "blinds",
	render: (part) => (
		<>
			<path d="M3 3h18" />
			<path d="M20 7H8" />
			<motion.path
				{...part(pose({ y: [0, 0, -1.5, 0] }, { duration: 0.9, times: [0, 0.3, 0.6, 1] }))}
				d="M20 11H8"
			/>
			<motion.path
				{...part(pose({ y: [0, 0, -4.5, 0] }, { duration: 0.9, times: [0, 0.3, 0.6, 1] }))}
				d="M10 19h10"
			/>
			<motion.path
				{...part(pose({ y: [0, 0, -3, 0] }, { duration: 0.9, times: [0, 0.3, 0.6, 1] }))}
				d="M8 15h12"
			/>
			<motion.g {...part(pose({ y: [0, 1.5, 0, 0] }, { duration: 0.9, times: [0, 0.25, 0.5, 1] }))}>
				<path d="M4 3v14" />
				<circle cx="4" cy="19" r="2" />
			</motion.g>
		</>
	),
});
