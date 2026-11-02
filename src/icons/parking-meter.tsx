import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "parking-meter",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 0, -4, 0] }, { duration: 0.8, times: [0, 0.4, 0.55, 1] }))}
				style={pivot(12, 22)}
			>
				<motion.path
					{...part(
						pose(
							{ y: [0, -1.5, 2.5, 2.5, 0], opacity: [1, 1, 0, 0, 1] },
							{ duration: 0.8, times: [0, 0.2, 0.45, 0.7, 1] },
						),
					)}
					d="M12 12v3"
				/>
				<motion.path
					{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.8, times: [0, 0.45, 0.6, 1] }))}
					d="M9 9a3 3 0 1 1 6 0"
				/>
				<path d="M11 15h2" />
				<path d="M12 19v3" />
				<path d="M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z" />
			</motion.g>
		</>
	),
});
