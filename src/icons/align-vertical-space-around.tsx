import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const bounce = pose(
	{ y: [0, -4.5, 4.5, 0] },
	{ duration: 0.72, times: [0, 0.2, 0.45, 1], ease: ["easeInOut", "easeInOut", springy] },
);
const bump = (d: number, at: number) =>
	pose({ y: [0, 0, d, 0] }, { duration: 0.72, times: [0, at, at + 0.08, 1], ease: ["easeInOut", snap, springy] });

export default createAnimatedIcon({
	name: "align-vertical-space-around",
	render: (part) => (
		<>
			<motion.rect {...part(bounce)} height="6" rx="2" width="10" x="7" y="9" />
			<motion.path {...part(bump(-1.5, 0.18))} d="M22 4H2" />
			<motion.path {...part(bump(1.5, 0.43))} d="M22 20H2" />
		</>
	),
});
