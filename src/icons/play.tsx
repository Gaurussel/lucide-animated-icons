import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "play",
	render: (part) => (
		<motion.polygon
			{...part(
				pose({ x: [0, -1.5, 2.5, 0], scale: [1, 0.94, 1.08, 1] }, { duration: 0.6, times: [0, 0.25, 0.6, 1] }),
			)}
			points="6 3 20 12 6 21 6 3"
			style={centered}
		/>
	),
});
