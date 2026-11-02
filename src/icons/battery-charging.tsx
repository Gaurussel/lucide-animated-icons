import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "battery-charging",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose(
						{ opacity: [1, 0.1, 1, 0.3, 1], scale: [1, 0.6, 1, 0.8, 1] },
						{ duration: 0.8, times: [0, 0.2, 0.4, 0.6, 1] },
					),
				)}
				d="m11 7-3 5h4l-3 5"
				style={centered}
			/>
			<path d="M14.856 6H16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.935" />
			<motion.path
				{...part(pose({ x: [0, -3, 0, 0] }, { duration: 0.8, times: [0, 0.2, 0.4, 1] }))}
				d="M22 14v-4"
			/>
			<path d="M5.14 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2.936" />
		</>
	),
});
