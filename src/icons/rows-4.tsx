import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap, springy } from "../helpers.ts";

const fall = (delay: number) =>
	pose(
		{ y: [0, -1.5, 3, 0] },
		{ duration: 0.5, delay, times: [0, 0.2, 0.45, 1], ease: ["easeInOut", "easeIn", springy] },
	);
const recoil = pose(
	{ y: [0, 0, 1.2, 0] },
	{ duration: 0.75, times: [0, 0.42, 0.5, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "rows-4",
	render: (part) => (
		<>
			<motion.rect {...part(recoil)} height="18" rx="2" width="18" x="3" y="3" />
			<motion.path {...part(fall(0))} d="M21 7.5H3" />
			<motion.path {...part(fall(0.07))} d="M21 12H3" />
			<motion.path {...part(fall(0.14))} d="M21 16.5H3" />
		</>
	),
});
