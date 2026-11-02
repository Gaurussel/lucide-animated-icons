import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap, springy } from "../helpers.ts";

const roll = pose(
	{ x: [0, 1.5, -4, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", "easeIn", springy] },
);
const shove = pose(
	{ x: [0, 0, -2, 0] },
	{ duration: 0.75, times: [0, 0.32, 0.42, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "rectangle-circle",
	render: (part) => (
		<>
			<motion.path {...part(shove)} d="M14 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
			<motion.circle {...part(roll)} cx="14" cy="12" r="8" />
		</>
	),
});
