import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const aim = pose(
	{ y: [0, -1.2, 0], rotate: [0, -7.2, 0] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const zoom = pose({ x: [0, 1.8, 0] }, { duration: 0.7, delay: 0.05, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "video",
	render: (part) => (
		<motion.g {...part(aim)} style={pivot(9, 18)}>
			<motion.path
				{...part(zoom)}
				d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
			/>
			<rect height="12" rx="2" width="14" x="2" y="6" />
		</motion.g>
	),
});
