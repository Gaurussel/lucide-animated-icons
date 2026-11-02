import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bubbles",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2.5, 0] }, { duration: 0.65, times: [0, 0.45, 1] }))}>
				<path d="M7.2 14.8a2 2 0 0 1 2 2" />
				<circle cx="7.5" cy="16.5" r="5.5" />
			</motion.g>
			<motion.circle
				{...part(pose({ y: [0, -2, 0] }, { duration: 0.65, delay: 0.1, times: [0, 0.45, 1] }))}
				cx="18.5"
				cy="8.5"
				r="3.5"
			/>
			<motion.circle
				{...part(pose({ y: [0, -1.5, 0] }, { duration: 0.65, delay: 0.2, times: [0, 0.45, 1] }))}
				cx="7.5"
				cy="4.5"
				r="2.5"
			/>
		</>
	),
});
