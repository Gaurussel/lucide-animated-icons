import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "download",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ y: [0, -1.5, 6, -6, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="M12 15V3" />
				<path d="m7 10 5 5 5-5" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, 0, 1, 0] }, { duration: 0.75, times: [0, 0.3, 0.5, 1] }))}
				d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
			/>
		</>
	),
});
