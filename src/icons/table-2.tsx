import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "table-2",
	render: (part) => (
		<motion.path
			{...part(
				pose(
					{ pathLength: [1, 0.2, 0.2, 1], scale: [1, 0.94, 0.94, 1] },
					{ duration: 0.8, times: [0, 0.3, 0.5, 1] },
				),
			)}
			d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
			style={centered}
		/>
	),
});
