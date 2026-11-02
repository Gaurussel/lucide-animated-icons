import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud-rain-wind",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ y: [0, -1, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.3, -1.3, 0], y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.65, times: [0, 0.4, 0.45, 1] },
					),
				)}
				d="m9.2 22 3-7"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.3, -1.3, 0], y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.65, delay: 0.08, times: [0, 0.4, 0.45, 1] },
					),
				)}
				d="m9 13-3 7"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, 1.3, -1.3, 0], y: [0, 3, -3, 0], opacity: [1, 0, 0, 1] },
						{ duration: 0.65, delay: 0.16, times: [0, 0.4, 0.45, 1] },
					),
				)}
				d="m17 13-3 7"
			/>
		</>
	),
});
