import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "egg",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, -8, 5, 0], scaleY: [1, 1.04, 0.98, 1] },
						{ duration: 0.8, times: [0, 0.3, 0.65, 1] },
					),
				)}
				style={pivot(12, 22)}
			>
				<path d="M12 2C8 2 4 8 4 14a8 8 0 0 0 16 0c0-6-4-12-8-12" />
			</motion.g>
		</>
	),
});
