import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "file-down",
	render: (part) => (
		<motion.g {...part(pose({ y: [0, -2.5, -2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
			<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
			<path d="M14 2v4a2 2 0 0 0 2 2h4" />
			<motion.g
				{...part(
					pose(
						{ y: [0, -1.5, 2, -2, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="M12 18v-6" />
				<path d="m9 15 3 3 3-3" />
			</motion.g>
		</motion.g>
	),
});
