import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "delete",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, 1, -2.5, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] }))}>
				<path d="M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z" />
				<motion.path
					{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }))}
					d="m12 9 6 6"
				/>
				<motion.path
					{...part(
						pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.7, delay: 0.06, times: [0, 0.3, 0.6, 1] }),
					)}
					d="m18 9-6 6"
				/>
			</motion.g>
		</>
	),
});
