import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "feather",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ rotate: [0, -8, 5, 0], y: [0, -1.5, -0.5, 0] },
						{ duration: 0.85, times: [0, 0.35, 0.7, 1] },
					),
				)}
				style={pivot(3, 21)}
			>
				<path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z" />
				<path d="M16 8 2 22" />
				<motion.g {...part(pose({ x: [0, -2, 0] }, { duration: 0.6, delay: 0.1, times: [0, 0.4, 1] }))}>
					<path d="M17.5 15H9" />
				</motion.g>
			</motion.g>
		</>
	),
});
