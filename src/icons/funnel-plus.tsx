import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "funnel-plus",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ scaleX: [1, 1.06, 0.82, 1], scaleY: [1, 0.92, 1.1, 1] },
						{ duration: 0.7, times: [0, 0.25, 0.6, 1] },
					),
				)}
				d="M13.354 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l1.218-1.348"
				style={edge(0.5, 0)}
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, times: [0, 0.2, 0.4, 0.8] }))}
				d="M16 6h6"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1] }, { duration: 0.7, delay: 0.1, times: [0, 0.2, 0.4, 0.8] }))}
				d="M19 3v6"
			/>
		</>
	),
});
