import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const dot = (delay: number) =>
	pose(
		{ y: [0, 1, -5, 0] },
		{ duration: 0.45, delay, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeOut", springy] },
	);
const dip = pose(
	{ y: [0, 0, 1.5, 0] },
	{ duration: 0.75, times: [0, 0.45, 0.52, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "rectangle-ellipsis",
	render: (part) => (
		<>
			<motion.rect {...part(dip)} height="12" rx="2" width="20" x="2" y="6" />
			<motion.path {...part(dot(0.08))} d="M12 12h.01" />
			<motion.path {...part(dot(0.16))} d="M17 12h.01" />
			<motion.path {...part(dot(0))} d="M7 12h.01" />
		</>
	),
});
