import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, 0.9, -3.6, 0], rotate: [0, 0, -9, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "club",
	render: (part) => (
		<>
			<motion.path
				{...part(leap)}
				d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"
				style={pivot(12, 17)}
			/>
			<motion.path {...part(redraw(0.3, 0.35))} d="M12 17.66L12 22" />
		</>
	),
});
