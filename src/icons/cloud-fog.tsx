import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud-fog",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1.2, 0] }, { duration: 0.9, times: [0, 0.45, 1] }))}
				d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
			/>
			<motion.path
				{...part(pose({ x: [0, -2.5, 0], opacity: [1, 0.35, 1] }, { duration: 0.9, times: [0, 0.45, 1] }))}
				d="M16 17H7"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 2.5, 0], opacity: [1, 0.35, 1] },
						{ duration: 0.9, delay: 0.08, times: [0, 0.45, 1] },
					),
				)}
				d="M17 21H9"
			/>
		</>
	),
});
