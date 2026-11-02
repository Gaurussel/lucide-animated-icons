import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "truck",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.2, 6, -6, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.85, times: [0, 0.18, 0.55, 0.56, 1] },
					),
				)}
			>
				<motion.g
					{...part(pose({ y: [0, 0, -0.8, 0, 0] }, { duration: 0.85, times: [0, 0.6, 0.72, 0.84, 1] }))}
				>
					<path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
					<path d="M15 18H9" />
					<path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
				</motion.g>
				<circle cx="17" cy="18" r="2" />
				<circle cx="7" cy="18" r="2" />
			</motion.g>
		</>
	),
});
