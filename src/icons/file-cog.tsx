import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, snap, springy } from "../helpers.ts";

const lift = pose(
	{ y: [0, 1, -4, 0], rotate: [0, 0, -5, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.35, 1], ease: ["easeInOut", snap, springy] },
);
const turn = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "file-cog",
	render: (part) => (
		<motion.g {...part(lift)} style={pivot(12, 22)}>
			<motion.path {...part(redraw(0.22, 0.35))} d="M14 2v4a2 2 0 0 0 2 2h4" />
			<path d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5" />
			<motion.g {...part(turn)} style={pivot(6, 14)}>
				<path d="m2.305 15.53.923-.382" />
				<path d="m3.228 12.852-.924-.383" />
				<path d="m4.852 11.228-.383-.923" />
				<path d="m4.852 16.772-.383.924" />
				<path d="m7.148 11.228.383-.923" />
				<path d="m7.53 17.696-.382-.924" />
				<path d="m8.772 12.852.923-.383" />
				<path d="m8.772 15.148.923.383" />
				<circle cx="6" cy="14" r="3" />
			</motion.g>
		</motion.g>
	),
});
