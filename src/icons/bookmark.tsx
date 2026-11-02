import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "bookmark",
	render: (part) => (
		<motion.path
			{...part(
				pose(
					{ y: [0, 1, -2, -2, 0], rotate: [0, 0, -5, -5, 0] },
					{ duration: 0.8, times: [0, 0.15, 0.4, 0.7, 1] },
				),
			)}
			d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
			style={pivot(12, 3)}
		/>
	),
});
