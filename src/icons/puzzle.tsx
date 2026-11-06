import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, springy } from "../helpers.ts";

const fit = pose(
	{ x: [0, 0, 1.8, -0.3, 0], y: [0, 0.6, -3, 0.6, 0], rotate: [0, -3, 15, -3.6, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.32, 0.46, 1], ease: ["easeInOut", "easeOut", "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "puzzle",
	render: (part) => (
		<motion.path
			{...part(fit)}
			d="M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"
			style={centered}
		/>
	),
});
