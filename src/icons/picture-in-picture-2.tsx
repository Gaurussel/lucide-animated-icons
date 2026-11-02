import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "picture-in-picture-2",
	render: (part) => (
		<>
			<path d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" />
			<motion.rect
				{...part(
					pose(
						{ x: [0, -4, -4, 0], y: [0, -4, -4, 0], scale: [1, 0.9, 0.9, 1] },
						{ duration: 0.8, times: [0, 0.4, 0.6, 1] },
					),
				)}
				height="7"
				rx="2"
				style={centered}
				width="10"
				x="12"
				y="13"
			/>
		</>
	),
});
