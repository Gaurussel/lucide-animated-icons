import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "mouse",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ scaleY: [1, 0.86, 1, 1], scaleX: [1, 1.07, 1, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.4, 1] },
					),
				)}
				style={edge(0.5, 1)}
			>
				<rect height="20" rx="7" width="14" x="5" y="2" />
				<motion.path
					{...part(
						pose(
							{ y: [0, 0, 4, -4, 0], opacity: [1, 1, 0, 0, 1] },
							{ duration: 0.8, times: [0, 0.2, 0.55, 0.56, 1] },
						),
					)}
					d="M12 6v4"
				/>
			</motion.g>
		</>
	),
});
