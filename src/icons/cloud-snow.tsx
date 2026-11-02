import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud-snow",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
			/>
			<motion.g
				{...part(
					pose(
						{ x: [0, 1.2, -1.2, 0], y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.65, times: [0, 0.4, 0.45, 1] },
					),
				)}
			>
				<path d="M8 15h.01" />
				<path d="M8 19h.01" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.2, 1.2, 0], y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.65, delay: 0.1, times: [0, 0.4, 0.45, 1] },
					),
				)}
			>
				<path d="M12 17h.01" />
				<path d="M12 21h.01" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ x: [0, 1.2, -1.2, 0], y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.65, delay: 0.2, times: [0, 0.4, 0.45, 1] },
					),
				)}
			>
				<path d="M16 15h.01" />
				<path d="M16 19h.01" />
			</motion.g>
		</>
	),
});
