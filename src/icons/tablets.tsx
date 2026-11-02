import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "tablets",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose({ x: [0, -1.5, -1.5, 0], y: [0, -1.5, -1.5, 0] }, { duration: 0.7, times: [0, 0.3, 0.6, 1] }),
				)}
			>
				<circle cx="7" cy="7" r="5" />
				<path d="m3.46 10.54 7.08-7.08" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ x: [0, 1.5, 1.5, 0], y: [0, 1.5, 1.5, 0] },
						{ duration: 0.7, delay: 0.1, times: [0, 0.3, 0.6, 1] },
					),
				)}
			>
				<circle cx="17" cy="17" r="5" />
				<path d="M12 17h10" />
			</motion.g>
		</>
	),
});
