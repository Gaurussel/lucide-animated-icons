import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "message-circle",
	render: (part) => (
		<motion.path
			{...part(
				pose({ scale: [1, 0.9, 1, 1], rotate: [0, 0, -5, 0] }, { duration: 0.8, times: [0, 0.25, 0.55, 1] }),
			)}
			d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
			style={pivot(2, 22)}
		/>
	),
});
