import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pivot, pose, ring, snap, springy } from "../helpers.ts";

const stir = pose({ rotate: [0, -15, 0] }, { duration: 0.75, times: [0, 0.2, 1], ease: [snap, ring] });
const steam = (delay: number) =>
	pose(
		{ y: [0, -3.6, 2.4, 0], opacity: [1, 0, 0, 1] },
		{ duration: 0.62, delay, times: [0, 0.35, 0.36, 1], ease: ["easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "soup",
	render: (part) => (
		<>
			<motion.path {...part(jelly(0.2, 0.75))} d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z" style={edge(0.5, 1)} />
			<path d="M7 21h10" />
			<motion.path {...part(stir)} d="M19.5 12 22 6" style={pivot(19.5, 12)} />
			<motion.path
				{...part(steam(0.1))}
				d="M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"
			/>
			<motion.path
				{...part(steam(0.05))}
				d="M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"
			/>
			<motion.path
				{...part(steam(0))}
				d="M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"
			/>
		</>
	),
});
