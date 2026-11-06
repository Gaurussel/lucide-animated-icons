import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const turn = pose(
	{ rotate: [0, -30, 360], scale: [1, 1.12, 1] },
	{ duration: 0.72, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);
const open = (direction: number) =>
	pose({ y: [0, 2 * direction, 0] }, { duration: 0.72, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "server-cog",
	render: (part) => (
		<>
			<motion.g {...part(open(-1))}>
				<path d="M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5" />
				<path d="M6 6h.01" />
			</motion.g>
			<motion.g {...part(open(1))}>
				<path d="M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5" />
				<path d="M6 18h.01" />
			</motion.g>
			<motion.g {...part(turn)} style={pivot(12, 12)}>
				<path d="m10.852 14.772-.383.923" />
				<path d="M13.148 14.772a3 3 0 1 0-2.296-5.544l-.383-.923" />
				<path d="m13.148 9.228.383-.923" />
				<path d="m13.53 15.696-.382-.924a3 3 0 1 1-2.296-5.544" />
				<path d="m14.772 10.852.923-.383" />
				<path d="m14.772 13.148.923.383" />
				<path d="m9.228 10.852-.923-.383" />
				<path d="m9.228 13.148-.923.383" />
			</motion.g>
		</>
	),
});
