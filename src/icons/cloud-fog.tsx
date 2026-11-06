import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -1.5, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const roll = (x: number, delay: number) =>
	pose({ x: [0, x, 0] }, { duration: 0.65, delay, times: [0, 0.3, 1], ease: ["easeInOut", springy] });

export default createAnimatedIcon({
	name: "cloud-fog",
	render: (part) => (
		<>
			<motion.path {...part(lift)} d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
			<motion.path {...part(roll(-5, 0))} d="M16 17H7" />
			<motion.path {...part(roll(5, 0.05))} d="M17 21H9" />
		</>
	),
});
