import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "car",
	render: (part) => (
		<motion.g {...part(pose({ x: [0, -1.5, 3, 0] }, { duration: 0.7, times: [0, 0.25, 0.6, 1] }))}>
			<motion.path
				{...part(pose({ y: [0, 0, -0.7, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
				d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
			/>
			<circle cx="7" cy="17" r="2" />
			<path d="M9 17h6" />
			<circle cx="17" cy="17" r="2" />
		</motion.g>
	),
});
