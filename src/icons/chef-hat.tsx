import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, snap } from "../helpers.ts";

const toss = pose(
	{ y: [0, -3.6, 0, 0], rotate: [0, -10.8, 0, 0] },
	{ duration: 0.7, times: [0, 0.25, 0.42, 1], ease: [snap, "easeIn", "easeInOut"] },
);

export default createAnimatedIcon({
	name: "chef-hat",
	render: (part) => (
		<motion.g {...part(toss)} style={edge(0.5, 1)}>
			<motion.g {...part(jelly(0.42, 0.7))} style={edge(0.5, 1)}>
				<path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
				<path d="M6 17h12" />
			</motion.g>
		</motion.g>
	),
});
