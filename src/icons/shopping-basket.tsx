import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const handle = (direction: number) =>
	pose(
		{ y: [0, -1.8, 0], x: [0, 1.5 * direction, 0] },
		{ duration: 0.68, times: [0, 0.25, 1], ease: [snap, springy] },
	);

export default createAnimatedIcon({
	name: "shopping-basket",
	render: (part) => (
		<>
			<motion.path {...part(handle(-1))} d="m19 11-4-7" />
			<motion.path {...part(handle(1))} d="m5 11 4-7" />
			<motion.g {...part(jelly(0.25, 0.68))} style={edge(0.5, 1)}>
				<path d="m15 11-1 9" />
				<path d="M2 11h20" />
				<path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4" />
				<path d="M4.5 15.5h15" />
				<path d="m9 11 1 9" />
			</motion.g>
		</>
	),
});
