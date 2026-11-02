import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mail-question-mark",
	render: (part) => (
		<>
			<path d="M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5" />
			<motion.path
				{...part(pose({ scaleY: [1, -0.8, -0.8, 1] }, { duration: 0.7, times: [0, 0.45, 0.6, 1] }))}
				d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
				style={edge(0.5, 0)}
			/>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, 0, -28, 20, 0], y: [0, 0, -2, 0, 0] },
						{ duration: 0.8, times: [0, 0.45, 0.62, 0.82, 1] },
					),
				)}
				style={edge(0.5, 1)}
			>
				<path d="M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2" />
				<path d="M20 22v.01" />
			</motion.g>
		</>
	),
});
