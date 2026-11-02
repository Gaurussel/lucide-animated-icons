import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bus",
	render: (part) => (
		<motion.g {...part(pose({ x: [0, -1.5, 2.5, 0] }, { duration: 0.8, times: [0, 0.2, 0.65, 1] }))}>
			<motion.g
				{...part(pose({ y: [0, 0, -0.8, 0, -0.8, 0] }, { duration: 0.8, times: [0, 0.3, 0.45, 0.6, 0.75, 1] }))}
			>
				<path d="M8 6v6" />
				<path d="M15 6v6" />
				<path d="M2 12h19.6" />
				<path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
			</motion.g>
			<circle cx="7" cy="18" r="2" />
			<path d="M9 18h5" />
			<circle cx="16" cy="18" r="2" />
		</motion.g>
	),
});
