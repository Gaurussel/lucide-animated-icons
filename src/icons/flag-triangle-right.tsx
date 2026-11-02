import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "flag-triangle-right",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleX: [1, 0.7, 1], rotate: [0, 5, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}
				d="M7 22V2l10 5-10 5"
				style={edge(0, 1)}
			/>
		</>
	),
});
