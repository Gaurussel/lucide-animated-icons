import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "text-cursor-input",
	render: (part) => (
		<>
			<path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7" />
			<path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1" />
			<motion.g
				{...part(
					pose(
						{ x: [0, 0, 3, 3, 0], opacity: [1, 0.15, 1, 0.15, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.45, 0.7, 1] },
					),
				)}
			>
				<path d="M12 20h-1a2 2 0 0 1-2-2 2 2 0 0 1-2 2H6" />
				<path d="M6 4h1a2 2 0 0 1 2 2 2 2 0 0 1 2-2h1" />
				<path d="M9 6v12" />
			</motion.g>
		</>
	),
});
