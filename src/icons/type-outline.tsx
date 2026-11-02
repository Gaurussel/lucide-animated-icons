import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "type-outline",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ y: [0, 0, -1.5, 0], scaleY: [1, 0.88, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.6, 1] }),
				)}
				d="M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
