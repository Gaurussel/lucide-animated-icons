import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pointer",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ y: [0, -1.5, 1.5, 0], scaleY: [1, 1.02, 0.94, 1] },
						{ duration: 0.7, times: [0, 0.3, 0.55, 1] },
					),
				)}
				style={edge(0.5, 1)}
			>
				<path d="M22 14a8 8 0 0 1-8 8" />
				<path d="M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
				<path d="M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1" />
				<path d="M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10" />
				<path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
			</motion.g>
		</>
	),
});
