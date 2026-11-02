import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "church",
	render: (part) => (
		<motion.g
			{...part(pose({ scale: [1, 0.92, 0.92, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
			style={pivot(12, 22)}
		>
			<motion.g
				{...part(pose({ y: [0, -3, 0], scale: [1, 1.4, 1] }, { duration: 0.7, times: [0, 0.4, 1] }))}
				style={centered}
			>
				<path d="M10 9h4" />
				<path d="M12 7v5" />
			</motion.g>
			<motion.path
				{...part(pose({ scaleX: [1, 0.1, 0.1, 1] }, { duration: 0.8, delay: 0.1, times: [0, 0.3, 0.65, 1] }))}
				d="M14 22v-4a2 2 0 0 0-4 0v4"
				style={edge(0.5, 1)}
			/>
			<path d="M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22" />
			<motion.path
				{...part(pose({ scaleY: [1, 0.8, 0.8, 1] }, { duration: 0.8, times: [0, 0.3, 0.65, 1] }))}
				d="m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"
				style={edge(0.5, 1)}
			/>
		</motion.g>
	),
});
