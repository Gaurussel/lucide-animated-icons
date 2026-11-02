import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, -4, 0, 0] },
	{ duration: 0.65, times: [0, 0.22, 0.44, 1], ease: [snap, "easeIn", "easeInOut"] },
);
const turn = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "folder-cog",
	render: (part) => (
		<motion.g {...part(leap)}>
			<motion.path
				{...part(jelly(0.44, 0.65))}
				d="M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.98a2 2 0 0 1 1.69.9l.66 1.2A2 2 0 0 0 12 6h8a2 2 0 0 1 2 2v3.3"
				style={edge(0.5, 1)}
			/>
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
		</motion.g>
	),
});
