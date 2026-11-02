import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "speech",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1, 0] }, { duration: 0.8, times: [0, 0.35, 1] }))}>
				<path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" />
			</motion.g>
			<motion.path
				{...part(
					pose({ x: [0, 2, 0], opacity: [1, 0.1, 1] }, { duration: 0.5, times: [0, 0.5, 1], delay: 0.35 }),
				)}
				d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"
			/>
			<motion.path
				{...part(
					pose({ x: [0, 2, 0], opacity: [1, 0.1, 1] }, { duration: 0.5, times: [0, 0.5, 1], delay: 0.2 }),
				)}
				d="M17 15a3.5 3.5 0 0 0-.025-4.975"
			/>
		</>
	),
});
