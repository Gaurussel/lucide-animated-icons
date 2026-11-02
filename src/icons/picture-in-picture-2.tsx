import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const float = pose(
	{ x: [0, 1, -5, 0], y: [0, 1, -4, 0], scale: [1, 1, 1.15, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);
const nudge = pose(
	{ x: [0, 0, -1.5, 0], y: [0, 0, -1, 0] },
	{ duration: 0.75, times: [0, 0.5, 0.58, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "picture-in-picture-2",
	render: (part) => (
		<>
			<motion.path {...part(nudge)} d="M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4" />
			<motion.rect {...part(float)} height="7" rx="2" style={pivot(17, 16.5)} width="10" x="12" y="13" />
		</>
	),
});
