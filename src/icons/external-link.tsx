import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "external-link",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, -1.5, 6, -5, 0], y: [0, 1.5, -6, 5, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.75, times: [0, 0.18, 0.55, 0.56, 1] },
					),
				)}
			>
				<path d="M15 3h6v6" />
				<path d="M10 14 21 3" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 1, 0.94, 1] }, { duration: 0.75, times: [0, 0.2, 0.55, 1] }))}
				d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
				style={centered}
			/>
		</>
	),
});
