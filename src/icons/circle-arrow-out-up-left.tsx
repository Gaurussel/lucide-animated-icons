import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "circle-arrow-out-up-left",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ x: [0, 1.5, -6, 5, 0], y: [0, 1.5, -6, 5, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="M2 8V2h6" />
				<path d="m2 2 10 10" />
			</motion.g>
			<motion.path
				{...part(pose({ scale: [1, 1, 0.92, 1] }, { duration: 0.75, times: [0, 0.2, 0.5, 1] }))}
				d="M12 2A10 10 0 1 1 2 12"
				style={centered}
			/>
		</>
	),
});
