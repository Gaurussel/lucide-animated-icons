import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose, ring, snap, springy } from "../helpers.ts";

const play = pose(
	{ x: [0, 1.8, 0], scale: [1, 1.18, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);
const legs = pose({ rotate: [0, 9.6, 0] }, { duration: 0.7, times: [0, 0.12, 1], ease: ["easeInOut", ring] });

export default createAnimatedIcon({
	name: "bug-play",
	render: (part) => (
		<>
			<motion.path
				{...part(play)}
				d="M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
				style={edge(0, 0.5)}
			/>
			<path d="M14.12 3.88 16 2" />
			<path d="M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5" />
			<path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
			<motion.g {...part(legs)} style={pivot(6, 13)}>
				<path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
				<path d="M6 13H2" />
				<path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
			</motion.g>
			<path d="m8 2 1.88 1.88" />
			<path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
		</>
	),
});
