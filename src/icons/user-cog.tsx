import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const head = pose({ y: [0, -4, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const shoulders = pose({ y: [0, -1.5, 0] }, { duration: 0.7, delay: 0.04, times: [0, 0.25, 1], ease: [snap, springy] });

const turn = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "user-cog",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M10 15H6a4 4 0 0 0-4 4v2" />
			<motion.circle {...part(head)} cx="9" cy="7" r="4" />
			<motion.g {...part(turn)} style={pivot(18, 15)}>
				<path d="m14.305 16.53.923-.382" />
				<path d="m15.228 13.852-.923-.383" />
				<path d="m16.852 12.228-.383-.923" />
				<path d="m16.852 17.772-.383.924" />
				<path d="m19.148 12.228.383-.923" />
				<path d="m19.53 18.696-.382-.924" />
				<path d="m20.772 13.852.924-.383" />
				<path d="m20.772 16.148.924.383" />
				<circle cx="18" cy="15" r="3" />
			</motion.g>
		</>
	),
});
