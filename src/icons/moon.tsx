import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "moon",
	render: (part) => (
		<motion.path
			{...part(
				pose(
					{ rotate: [0, -20, -20, 0], scale: [1, 0.92, 0.92, 1] },
					{ duration: 0.8, times: [0, 0.4, 0.62, 1] },
				),
			)}
			d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
			style={pivot(12, 12)}
		/>
	),
});
