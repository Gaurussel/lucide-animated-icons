import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap, springy } from "../helpers.ts";

const feedIn = pose(
	{ y: [0, -0.9, 1.8, 0] },
	{ duration: 0.7, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", "easeIn", springy] },
);
const feedOut = pose(
	{ y: [0, 0, 2.1, 0] },
	{ duration: 0.7, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "printer",
	render: (part) => (
		<>
			<motion.path {...part(feedIn)} d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
			<motion.path
				{...part(jelly(0.3, 0.7))}
				d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
				style={edge(0.5, 1)}
			/>
			<motion.rect {...part(feedOut)} height="8" rx="1" width="12" x="6" y="14" />
		</>
	),
});
