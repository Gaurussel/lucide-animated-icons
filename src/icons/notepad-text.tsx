import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "notepad-text",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
				<motion.path {...part(pose({ y: [0, -1.5, 0] }, { duration: 0.35 }))} d="M8 2v4" />
				<motion.path {...part(pose({ y: [0, -1.5, 0] }, { duration: 0.35, delay: 0.06 }))} d="M12 2v4" />
				<motion.path {...part(pose({ y: [0, -1.5, 0] }, { duration: 0.35, delay: 0.12 }))} d="M16 2v4" />
				<rect height="18" rx="2" width="16" x="4" y="4" />
				<motion.path
					{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.65, times: [0, 0.2, 0.4, 1] }))}
					d="M8 10h6"
				/>
				<motion.path
					{...part(
						pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.65, times: [0, 0.2, 0.4, 1], delay: 0.1 }),
					)}
					d="M8 14h8"
				/>
				<motion.path
					{...part(
						pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.65, times: [0, 0.2, 0.4, 1], delay: 0.2 }),
					)}
					d="M8 18h5"
				/>
			</motion.g>
		</>
	),
});
