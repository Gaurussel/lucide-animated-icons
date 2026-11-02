import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "thumbs-up",
	render: (part) => (
		<motion.g
			{...part(
				pose(
					{ rotate: [0, 8, -14, -14, 0], y: [0, 1, -1.5, -1.5, 0] },
					{ duration: 0.75, times: [0, 0.2, 0.5, 0.7, 1] },
				),
			)}
			style={pivot(7, 22)}
		>
			<path d="M7 10v12" />
			<path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
		</motion.g>
	),
});
