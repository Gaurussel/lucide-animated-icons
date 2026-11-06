import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap, springy } from "../helpers.ts";

const gust = (delay: number) =>
	pose({ x: [0, 2.4, 0] }, { duration: 0.6, delay, times: [0, 0.25, 1], ease: [snap, rubber] });
const drop = pose(
	{ y: [0, -1.8, 2.4, 0] },
	{ duration: 0.65, times: [0, 0.18, 0.38, 1], ease: [snap, "easeIn", springy] },
);

export default createAnimatedIcon({
	name: "wind-arrow-down",
	render: (part) => (
		<>
			<motion.g {...part(drop)}>
				<path d="M10 2v8" />
				<path d="m6 6 4 4 4-4" />
			</motion.g>
			<motion.path {...part(gust(0.1))} d="M12.8 21.6A2 2 0 1 0 14 18H2" />
			<motion.path {...part(gust(0.04))} d="M17.5 10a2.5 2.5 0 1 1 2 4H2" />
		</>
	),
});
