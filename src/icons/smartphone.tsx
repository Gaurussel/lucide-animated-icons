import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "smartphone",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ rotate: [0, -9, 9, -9, 9, 0] }, { duration: 0.75, times: [0, 0.15, 0.35, 0.55, 0.75, 1] }),
				)}
				style={centered}
			>
				<rect height="20" rx="2" ry="2" width="14" x="5" y="2" />
				<motion.path
					{...part(
						pose(
							{ opacity: [1, 0, 1, 0, 1, 1] },
							{ duration: 0.75, times: [0, 0.15, 0.35, 0.55, 0.75, 1] },
						),
					)}
					d="M12 18h.01"
				/>
			</motion.g>
		</>
	),
});
