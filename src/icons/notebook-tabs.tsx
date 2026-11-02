import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "notebook-tabs",
	render: (part) => (
		<>
			<motion.path {...part(pose({ x: [0, 2.5, 0] }, { duration: 0.35 }))} d="M2 6h4" />
			<motion.path {...part(pose({ x: [0, 2.5, 0] }, { duration: 0.35, delay: 0.06 }))} d="M2 10h4" />
			<motion.path {...part(pose({ x: [0, 2.5, 0] }, { duration: 0.35, delay: 0.12 }))} d="M2 14h4" />
			<motion.path {...part(pose({ x: [0, 2.5, 0] }, { duration: 0.35, delay: 0.18 }))} d="M2 18h4" />
			<motion.g {...part(pose({ y: [0, -2, -2, 0] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}>
				<rect height="20" rx="2" width="16" x="4" y="2" />
				<path d="M15 2v20" />
				<motion.path
					{...part(pose({ x: [0, 3, 3, 0] }, { duration: 0.8, times: [0, 0.45, 0.7, 1] }))}
					d="M15 7h5"
				/>
				<motion.path
					{...part(pose({ x: [0, 3, 3, 0] }, { duration: 0.8, times: [0, 0.45, 0.7, 1], delay: 0.06 }))}
					d="M15 12h5"
				/>
				<motion.path
					{...part(pose({ x: [0, 3, 3, 0] }, { duration: 0.8, times: [0, 0.45, 0.7, 1], delay: 0.12 }))}
					d="M15 17h5"
				/>
			</motion.g>
		</>
	),
});
