import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "phone-off",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, -14, 14, -10, 8, -4, 0, 0] },
						{ duration: 0.9, times: [0, 0.07, 0.17, 0.29, 0.4, 0.5, 0.58, 1] },
					),
				)}
				style={centered}
			>
				<path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272" />
				<path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473" />
			</motion.g>
			<motion.path
				{...part(pose({ pathLength: [1, 1, 0, 1] }, { duration: 0.9, times: [0, 0.5, 0.65, 1] }))}
				d="M22 2 2 22"
			/>
		</>
	),
});
