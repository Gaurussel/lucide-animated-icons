import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, edge, pose } from "../helpers.ts";

const cross = pose(
	{ scale: [1, 1, 0, 0, 1], rotate: [0, 0, 90, 90, 0] },
	{ duration: 0.8, times: [0, 0.15, 0.5, 0.65, 1] },
);

export default createAnimatedIcon({
	name: "funnel-x",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ scaleX: [1, 0.88, 1, 1], scaleY: [1, 1.05, 1, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.5, 1] },
					),
				)}
				d="M12.531 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14v6a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341l.427-.473"
				style={edge(0.5, 0)}
			/>
			<motion.g {...part(cross)} style={centered}>
				<path d="m16.5 3.5 5 5" />
				<path d="m21.5 3.5-5 5" />
			</motion.g>
		</>
	),
});
