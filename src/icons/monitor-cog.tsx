import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const screen = pose(
	{ y: [0, -3, 0.3, 0], rotate: [0, -4.8, 0, 0] },
	{ duration: 0.7, times: [0, 0.28, 0.42, 1], ease: [snap, "easeIn", springy] },
);
const cog = pose(
	{ rotate: [0, -30, 360] },
	{ duration: 0.75, times: [0, 0.18, 1], ease: ["easeInOut", springy], reset: true },
);

export default createAnimatedIcon({
	name: "monitor-cog",
	render: (part) => (
		<>
			<motion.g {...part(screen)} style={edge(0.5, 1)}>
				<path d="M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7" />
				<motion.g {...part(cog)} style={pivot(18, 6)}>
					<path d="m14.305 7.53.923-.382" />
					<path d="m15.228 4.852-.923-.383" />
					<path d="m16.852 3.228-.383-.924" />
					<path d="m16.852 8.772-.383.923" />
					<path d="m19.148 3.228.383-.924" />
					<path d="m19.53 9.696-.382-.924" />
					<path d="m20.772 4.852.924-.383" />
					<path d="m20.772 7.148.924.383" />
					<circle cx="18" cy="6" r="3" />
				</motion.g>
			</motion.g>
			<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
				<path d="M12 17v4" />
				<path d="M8 21h8" />
			</motion.g>
		</>
	),
});
