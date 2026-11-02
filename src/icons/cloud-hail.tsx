import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud-hail",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
			/>
			<motion.g
				{...part(
					pose({ y: [0, 4, -4, 0], opacity: [1, 0, 0, 1] }, { duration: 0.65, times: [0, 0.4, 0.45, 1] }),
				)}
			>
				<path d="M8 14v2" />
				<path d="M8 20h.01" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ y: [0, 4, -4, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.65, delay: 0.08, times: [0, 0.4, 0.45, 1] },
					),
				)}
			>
				<path d="M12 16v2" />
				<path d="M12 22h.01" />
			</motion.g>
			<motion.g
				{...part(
					pose(
						{ y: [0, 4, -4, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.65, delay: 0.16, times: [0, 0.4, 0.45, 1] },
					),
				)}
			>
				<path d="M16 14v2" />
				<path d="M16 20h.01" />
			</motion.g>
		</>
	),
});
