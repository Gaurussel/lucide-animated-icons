import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const lift = (height: number, degrees: number) =>
	pose({ y: [0, -height, 0], rotate: [0, degrees, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "layers",
	render: (part) => (
		<>
			<motion.path
				{...part(lift(6, -10))}
				d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
				style={edge(0.5, 0.5)}
			/>
			<motion.path
				{...part(lift(3, 6))}
				d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
				style={edge(0.5, 0.5)}
			/>
			<motion.path
				{...part(jelly(0.38, 0.7))}
				d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
				style={edge(0.5, 1)}
			/>
		</>
	),
});
