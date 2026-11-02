import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "navigation",
	render: (part) => (
		<>
			<motion.polygon
				{...part(
					pose(
						{ x: [0, -1.5, 2, 2, 0], y: [0, 1.5, -2, -2, 0], rotate: [0, -14, 0, 0, 0] },
						{ duration: 0.75, times: [0, 0.25, 0.55, 0.7, 1] },
					),
				)}
				points="3 11 22 2 13 21 11 13 3 11"
				style={pivot(12, 12)}
			/>
		</>
	),
});
