import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "scaling",
	render: (part) => (
		<>
			<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
			<motion.path
				{...part(
					pose(
						{ x: [0, 1, -2, 0, 0], y: [0, -1, 2, 0, 0] },
						{ duration: 0.85, times: [0, 0.2, 0.5, 0.8, 1] },
					),
				)}
				d="M14 15H9v-5"
			/>
			<motion.path
				{...part(
					pose(
						{ x: [0, -1, 2, 0, 0], y: [0, 1, -2, 0, 0] },
						{ duration: 0.85, times: [0, 0.2, 0.5, 0.8, 1] },
					),
				)}
				d="M16 3h5v5"
			/>
			<motion.path
				{...part(pose({ scale: [1, 0.85, 1.18, 1, 1] }, { duration: 0.85, times: [0, 0.2, 0.55, 0.85, 1] }))}
				d="M21 3 9 15"
				style={centered}
			/>
		</>
	),
});
