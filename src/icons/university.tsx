import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "university",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.3, 1] }, { duration: 0.5, delay: 0.3, times: [0, 0.5, 1] }))}
				d="M14 21v-3a2 2 0 0 0-4 0v3"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scale: [1, 2.8, 1] }, { duration: 0.4, delay: 0.1, times: [0, 0.5, 1] }))}
				d="M18 12h.01"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 2.8, 1] }, { duration: 0.4, delay: 0.3, times: [0, 0.5, 1] }))}
				d="M18 16h.01"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scaleY: [1, 0.93, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.45, 1] }))}
				d="M22 7a1 1 0 0 0-1-1h-2a2 2 0 0 1-1.143-.359L13.143 2.36a2 2 0 0 0-2.286-.001L6.143 5.64A2 2 0 0 1 5 6H3a1 1 0 0 0-1 1v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"
				style={edge(0.5, 1)}
			/>
			<motion.path
				{...part(pose({ scale: [1, 2.8, 1] }, { duration: 0.4, times: [0, 0.5, 1] }))}
				d="M6 12h.01"
				style={centered}
			/>
			<motion.path
				{...part(pose({ scale: [1, 2.8, 1] }, { duration: 0.4, delay: 0.2, times: [0, 0.5, 1] }))}
				d="M6 16h.01"
				style={centered}
			/>
			<motion.circle
				{...part(pose({ scale: [1, 0.4, 1] }, { duration: 0.5, times: [0, 0.5, 1] }))}
				cx="12"
				cy="10"
				r="2"
				style={centered}
			/>
		</>
	),
});
