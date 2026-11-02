import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const arc = (delay: number) =>
	pose({ y: [0, -2.5, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const turn = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "wifi-cog",
	render: (part) => (
		<>
			<motion.path {...part(arc(0))} d="M8.5 15.429a5 5 0 0 1 2.413-1.31" />
			<motion.path {...part(arc(0.06))} d="M5 11.858a10 10 0 0 1 11.5-1.785" />
			<motion.path {...part(arc(0.12))} d="M2 7.82a15 15 0 0 1 20 0" />
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
