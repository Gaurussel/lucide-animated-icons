import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flag-triangle-left",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 0.7, 1], rotate: [0, -5, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				d="M17 22V2L7 7l10 5"
				style={edge(1, 1)}
			/>
		</>
	),
});
