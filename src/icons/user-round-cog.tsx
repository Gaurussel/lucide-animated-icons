import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const head = pose({ y: [0, -2.4, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] });
const shoulders = pose({ y: [0, -0.9, 0] }, { duration: 0.7, delay: 0.04, times: [0, 0.25, 1], ease: [snap, springy] });

const turn = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "user-round-cog",
	render: (part) => (
		<>
			<motion.path {...part(shoulders)} d="M2 21a8 8 0 0 1 10.434-7.62" />
			<motion.circle {...part(head)} cx="10" cy="8" r="5" />
			<motion.g {...part(turn)} style={pivot(18, 18)}>
				<path d="m14.305 19.53.923-.382" />
				<path d="m15.228 16.852-.923-.383" />
				<path d="m16.852 15.228-.383-.923" />
				<path d="m16.852 20.772-.383.924" />
				<path d="m19.148 15.228.383-.923" />
				<path d="m19.53 21.696-.382-.924" />
				<path d="m20.772 16.852.924-.383" />
				<path d="m20.772 19.148.924.383" />
				<circle cx="18" cy="18" r="3" />
			</motion.g>
		</>
	),
});
