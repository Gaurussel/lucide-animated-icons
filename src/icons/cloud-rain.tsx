import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -1.5, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const fall = (delay: number) =>
	pose(
		{ y: [0, -0.6, 4.2, -2.4, 0], opacity: [1, 1, 0, 0, 1] },
		{ duration: 0.65, delay, times: [0, 0.12, 0.4, 0.41, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
	);

export default createAnimatedIcon({
	name: "cloud-rain",
	render: (part) => (
		<>
			<motion.path {...part(lift)} d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
			<motion.path {...part(fall(0.08))} d="M16 14v6" />
			<motion.path {...part(fall(0))} d="M8 14v6" />
			<motion.path {...part(fall(0.04))} d="M12 16v6" />
		</>
	),
});
