import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, springy } from "../helpers.ts";

const jump = pose(
	{ y: [0, 0.9, -2.4, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", "easeOut", springy] },
);
const flip = pose(
	{ scaleX: [1, 1, -0.2, 1.07, 1], rotate: [0, 0, -9, 0, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.4, 0.52, 1], ease: ["easeInOut", "easeIn", "easeOut", springy] },
);

export default createAnimatedIcon({
	name: "omega",
	render: (part) => (
		<motion.g {...part(jump)}>
			<motion.path
				{...part(flip)}
				d="M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"
				style={pivot(12, 12)}
			/>
		</motion.g>
	),
});
