import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "brain-circuit",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ scale: [1, 0.88, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.55, 1] }))}
				style={centered}
			>
				<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
				<path d="M9 13a4.5 4.5 0 0 0 3-4" />
				<path d="M6.003 5.125A3 3 0 0 0 6.401 6.5" />
				<path d="M3.477 10.896a4 4 0 0 1 .585-.396" />
				<path d="M6 18a4 4 0 0 1-1.967-.516" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.6, times: [0, 0.2, 0.45, 1] }))}
				d="M12 13h4"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.6, delay: 0.06, times: [0, 0.2, 0.45, 1] }))}
				d="M12 18h6a2 2 0 0 1 2 2v1"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.6, delay: 0.12, times: [0, 0.2, 0.45, 1] }))}
				d="M12 8h8"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.6, delay: 0.18, times: [0, 0.2, 0.45, 1] }))}
				d="M16 8V5a2 2 0 0 1 2-2"
			/>
			<motion.circle
				{...part(pose({ opacity: [1, 0, 1, 1] }, { duration: 0.6, delay: 0.2, times: [0, 0.4, 0.8, 1] }))}
				cx="16"
				cy="13"
				r=".5"
			/>
			<motion.circle
				{...part(pose({ opacity: [1, 0, 1, 1] }, { duration: 0.6, delay: 0.26, times: [0, 0.4, 0.8, 1] }))}
				cx="18"
				cy="3"
				r=".5"
			/>
			<motion.circle
				{...part(pose({ opacity: [1, 0, 1, 1] }, { duration: 0.6, delay: 0.32, times: [0, 0.4, 0.8, 1] }))}
				cx="20"
				cy="21"
				r=".5"
			/>
			<motion.circle
				{...part(pose({ opacity: [1, 0, 1, 1] }, { duration: 0.6, delay: 0.38, times: [0, 0.4, 0.8, 1] }))}
				cx="20"
				cy="8"
				r=".5"
			/>
		</>
	),
});
