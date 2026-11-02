import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "eraser",
	render: (part) => (
		<motion.g
			{...part(
				pose(
					{ x: [0, 0, -2.5, 2.5, 0], y: [0, -1.5, 0, 0, 0], rotate: [0, -5, 0, 0, 0] },
					{ duration: 0.85, times: [0, 0.2, 0.45, 0.75, 1] },
				),
			)}
		>
			<path d="M21 21H8a2 2 0 0 1-1.42-.587l-3.994-3.999a2 2 0 0 1 0-2.828l10-10a2 2 0 0 1 2.829 0l5.999 6a2 2 0 0 1 0 2.828L12.834 21" />
			<path d="m5.082 11.09 8.828 8.828" />
		</motion.g>
	),
});
