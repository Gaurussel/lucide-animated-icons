import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "waves-ladder",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 2, 2, 0] }, { duration: 0.85, times: [0, 0.3, 0.65, 1] }))}>
				<path d="M19 5a2 2 0 0 0-2 2v11" />
				<path d="M7 13h10" />
				<path d="M7 9h10" />
				<path d="M9 5a2 2 0 0 0-2 2v11" />
			</motion.g>
			<motion.path
				{...part(
					pose(
						{ x: [0, -2.5, 2.5, 0], y: [0, -0.8, 0.8, 0] },
						{ duration: 0.85, delay: 0.1, times: [0, 0.35, 0.75, 1] },
					),
				)}
				d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
			/>
		</>
	),
});
