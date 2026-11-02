import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "cloud-upload",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ y: [0, 1.5, -6, 5, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="M12 13v8" />
				<path d="m8 17 4-4 4 4" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, 0, 1, 0] }, { duration: 0.75, times: [0, 0.2, 0.45, 1] }))}
				d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
			/>
		</>
	),
});
