import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "qr-code",
	render: (part) => (
		<>
			<motion.rect
				{...part(pose({ scale: [1, 0.75, 1, 1] }, { duration: 0.9, times: [0, 0.3, 0.6, 1] }))}
				height="5"
				rx="1"
				style={centered}
				width="5"
				x="3"
				y="3"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 0.75, 1, 1] }, { duration: 0.9, times: [0, 0.3, 0.6, 1], delay: 0.1 }))}
				height="5"
				rx="1"
				style={centered}
				width="5"
				x="16"
				y="3"
			/>
			<motion.rect
				{...part(pose({ scale: [1, 0.75, 1, 1] }, { duration: 0.9, times: [0, 0.3, 0.6, 1], delay: 0.2 }))}
				height="5"
				rx="1"
				style={centered}
				width="5"
				x="3"
				y="16"
			/>
			<motion.g {...part(pose({ opacity: [1, 1, 0.2, 1] }, { duration: 0.9, times: [0, 0.4, 0.65, 1] }))}>
				<path d="M21 16h-3a2 2 0 0 0-2 2v3" />
				<path d="M21 21v.01" />
				<path d="M12 7v3a2 2 0 0 1-2 2H7" />
			</motion.g>
			<motion.g
				{...part(pose({ opacity: [1, 1, 0.2, 1] }, { duration: 0.9, times: [0, 0.4, 0.65, 1], delay: 0.1 }))}
			>
				<path d="M3 12h.01" />
				<path d="M12 3h.01" />
				<path d="M12 16v.01" />
			</motion.g>
			<motion.g
				{...part(pose({ opacity: [1, 1, 0.2, 1] }, { duration: 0.9, times: [0, 0.4, 0.65, 1], delay: 0.2 }))}
			>
				<path d="M16 12h1" />
				<path d="M21 12v.01" />
				<path d="M12 21v-1" />
			</motion.g>
		</>
	),
});
