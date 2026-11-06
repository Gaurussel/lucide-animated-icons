import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap } from "../helpers.ts";

const resize = pose(
	{ scale: [1, 0.94, 1.15, 1] },
	{ duration: 0.7, times: [0, 0.12, 0.32, 1], ease: ["easeInOut", "easeIn", rubber] },
);
const follow = pose(
	{ x: [0, 0, 1.8, 0] },
	{ duration: 0.7, times: [0, 0.2, 0.4, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "proportions",
	render: (part) => (
		<>
			<rect height="16" rx="2" width="20" x="2" y="4" />
			<motion.path {...part(resize)} d="M2 9h13a2 2 0 0 1 2 2v9" style={pivot(2, 20)} />
			<motion.path {...part(follow)} d="M12 9v11" />
		</>
	),
});
