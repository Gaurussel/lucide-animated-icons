import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "image-up",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 0, 1, 0] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}>
				<path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21" />
				<circle cx="9" cy="9" r="2" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ y: [0, 1.5, -7, 5, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.8, times: [0, 0.18, 0.55, 0.56, 1] },
					),
				)}
			>
				<path d="m14 19.5 3-3 3 3" />
				<path d="M17 22v-5.5" />
			</motion.g>
		</>
	),
});
