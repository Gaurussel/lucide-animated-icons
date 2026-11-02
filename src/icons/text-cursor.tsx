import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "text-cursor",
	render: (part) => (
		<motion.g
			{...part(
				pose({ x: [0, 2.5, 2.5, 0], opacity: [1, 1, 0.2, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }),
			)}
		>
			<path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
			<path d="M7 22h1a4 4 0 0 0 4-4v-1" />
			<path d="M7 2h1a4 4 0 0 1 4 4v1" />
		</motion.g>
	),
});
