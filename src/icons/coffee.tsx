import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const sip = pose({ rotate: [0, -6, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const steam = (delay: number) =>
	pose(
		{ y: [0, 0.6, -3, 1.8, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.65, delay, times: [0, 0.12, 0.4, 0.41, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "coffee",
	render: (part) => (
		<>
			<motion.path
				{...part(sip)}
				d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
				style={pivot(10, 21)}
			/>
			<motion.path {...part(steam(0))} d="M6 2v2" />
			<motion.path {...part(steam(0.05))} d="M10 2v2" />
			<motion.path {...part(steam(0.1))} d="M14 2v2" />
		</>
	),
});
