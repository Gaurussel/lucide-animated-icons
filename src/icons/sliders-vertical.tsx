import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sliders-vertical",
	render: (part) => (
		<>
			<motion.line
				{...part(pose({ opacity: [1, 0.25, 1, 1] }, { duration: 0.75, times: [0, 0.35, 0.7, 1] }))}
				x1="4"
				x2="4"
				y1="21"
				y2="14"
			/>
			<motion.line
				{...part(pose({ opacity: [1, 0.25, 1, 1] }, { duration: 0.75, times: [0, 0.35, 0.7, 1] }))}
				x1="4"
				x2="4"
				y1="10"
				y2="3"
			/>
			<motion.line
				{...part(pose({ opacity: [1, 0.25, 1, 1] }, { duration: 0.75, times: [0, 0.35, 0.7, 1] }))}
				x1="12"
				x2="12"
				y1="21"
				y2="12"
			/>
			<motion.line
				{...part(pose({ opacity: [1, 0.25, 1, 1] }, { duration: 0.75, times: [0, 0.35, 0.7, 1] }))}
				x1="12"
				x2="12"
				y1="8"
				y2="3"
			/>
			<motion.line
				{...part(pose({ opacity: [1, 0.25, 1, 1] }, { duration: 0.75, times: [0, 0.35, 0.7, 1] }))}
				x1="20"
				x2="20"
				y1="21"
				y2="16"
			/>
			<motion.line
				{...part(pose({ opacity: [1, 0.25, 1, 1] }, { duration: 0.75, times: [0, 0.35, 0.7, 1] }))}
				x1="20"
				x2="20"
				y1="12"
				y2="3"
			/>
			<motion.g {...part(pose({ y: [0, -8, 5, 0] }, { duration: 0.75, times: [0, 0.35, 0.7, 1] }))}>
				<line x1="2" x2="6" y1="14" y2="14" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 8, -5, 0] }, { duration: 0.75, times: [0, 0.35, 0.7, 1], delay: 0.1 }))}>
				<line x1="10" x2="14" y1="8" y2="8" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, -7, 6, 0] }, { duration: 0.75, times: [0, 0.35, 0.7, 1], delay: 0.2 }))}>
				<line x1="18" x2="22" y1="16" y2="16" />
			</motion.g>
		</>
	),
});
