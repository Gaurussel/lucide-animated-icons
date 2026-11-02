import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const pull = pose(
	{ x: [0, 2, -3, 0] },
	{ duration: 0.7, times: [0, 0.18, 0.4, 1], ease: ["easeInOut", snap, springy] },
);
const node = (delay: number) =>
	pose({ scale: [1, 1.35, 1] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "git-merge",
	render: (part) => (
		<>
			<motion.circle {...part(pull)} cx="18" cy="18" r="3" />
			<motion.circle {...part(node(0.25))} cx="6" cy="6" r="3" style={centered} />
			<motion.path {...part(redraw(0.08, 0.55))} d="M6 21V9a9 9 0 0 0 9 9" />
		</>
	),
});
