import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "milestone",
	render: (part) => (
		<>
			<motion.path
				{...part(
					pose({ x: [0, -1.5, 2, 0], rotate: [0, -4, 3, 0] }, { duration: 0.75, times: [0, 0.25, 0.6, 1] }),
				)}
				d="M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
				style={pivot(12, 9.5)}
			/>
			<path d="M12 13v8" />
			<motion.path
				{...part(pose({ scaleY: [1, 1, 0.5, 1] }, { duration: 0.75, times: [0, 0.4, 0.6, 1] }))}
				d="M12 3v3"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
