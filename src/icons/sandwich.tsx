import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, snap, springy } from "../helpers.ts";

const lid = pose({ y: [0, -5, 0], rotate: [0, -12, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "sandwich",
	render: (part) => (
		<>
			<motion.path
				{...part(lid)}
				d="m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"
				style={pivot(2, 11)}
			/>
			<motion.g {...part(jelly(0.4, 0.7))} style={edge(0.5, 1)}>
				<path d="M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25" />
				<path d="M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9" />
				<path d="m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2" />
				<rect height="4" rx="1" width="20" x="2" y="11" />
			</motion.g>
		</>
	),
});
