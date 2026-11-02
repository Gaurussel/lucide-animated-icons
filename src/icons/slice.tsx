import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "slice",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, 1.5, -2.5, 0], y: [0, -1.5, 2.5, 0], rotate: [0, 3, -4, 0] },
						{ duration: 0.7, times: [0, 0.25, 0.65, 1] },
					),
				)}
				style={pivot(20, 5)}
			>
				<path d="M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14" />
			</motion.g>
		</>
	),
});
