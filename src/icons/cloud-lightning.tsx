import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud-lightning",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ opacity: [1, 1, 0.55, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.4, 0.6, 1] }))}
				d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"
			/>
			<motion.path
				{...part(
					pose(
						{ y: [0, -2.5, 0, 0, 0], opacity: [1, 0, 1, 0.2, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.35, 0.5, 1] },
					),
				)}
				d="m13 12-3 5h4l-3 5"
			/>
		</>
	),
});
