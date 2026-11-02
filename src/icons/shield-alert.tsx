import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "shield-alert",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scale: [1, 0.9, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
				style={centered}
			/>
			<motion.path
				{...part(
					pose(
						{ scaleY: [1, 1, 0.5, 1, 0.5, 1, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.4, 0.55, 0.65, 0.8, 1] },
					),
				)}
				d="M12 8v4"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(
					pose(
						{ opacity: [1, 1, 0, 1, 0, 1, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.4, 0.55, 0.65, 0.8, 1] },
					),
				)}
				d="M12 16h.01"
			/>
		</>
	),
});
