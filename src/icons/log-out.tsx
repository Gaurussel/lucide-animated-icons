import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "log-out",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.5, 5, -5, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="m16 17 5-5-5-5" />
				<path d="M21 12H9" />
			</motion.g>
			<motion.path
				{...part(pose({ x: [0, -1, 0, 0] }, { duration: 0.75, times: [0, 0.2, 0.45, 1] }))}
				d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
			/>
		</>
	),
});
