import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, springy } from "../helpers.ts";

const swingOut = (x: number, at: number) =>
	pose(
		{ x: [0, 0, x, 0] },
		{ duration: 0.75, times: [0, at, at + 0.15, 1], ease: ["easeInOut", "easeOut", springy] },
	);
const knock = pose(
	{ x: [0, -0.48, 0.48, 0] },
	{ duration: 0.75, times: [0, 0.2, 0.32, 1], ease: ["easeInOut", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "ellipsis",
	render: (part) => (
		<>
			<motion.circle {...part(swingOut(-4, 0.02))} cx="5" cy="12" r="1" />
			<motion.circle {...part(knock)} cx="12" cy="12" r="1" />
			<motion.circle {...part(swingOut(4, 0.22))} cx="19" cy="12" r="1" />
		</>
	),
});
