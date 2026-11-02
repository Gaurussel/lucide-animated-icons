import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "funnel",
	render: (part) => (
		<motion.path
			{...part(
				pose(
					{ scaleX: [1, 1.06, 0.8, 1], scaleY: [1, 0.92, 1.1, 1] },
					{ duration: 0.7, times: [0, 0.25, 0.6, 1] },
				),
			)}
			d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"
			style={edge(0.5, 0)}
		/>
	),
});
