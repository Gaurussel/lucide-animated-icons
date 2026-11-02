import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "dice-1",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ y: [0, -3, -3, 0], rotate: [0, -10, 6, 0] }, { duration: 0.8, times: [0, 0.35, 0.6, 1] }),
				)}
				style={centered}
			>
				<rect height="18" rx="2" ry="2" width="18" x="3" y="3" />
				<motion.g
					{...part(pose({ scale: [1, 0, 0, 1] }, { duration: 0.75, times: [0, 0.15, 0.5, 1] }))}
					style={centered}
				>
					<path d="M12 12h.01" />
				</motion.g>
			</motion.g>
		</>
	),
});
