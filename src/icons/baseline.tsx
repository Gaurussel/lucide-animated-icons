import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap, springy } from "../helpers.ts";

const leap = pose(
	{ y: [0, 1.5, -5.5, 1, 0] },
	{ duration: 0.72, times: [0, 0.12, 0.3, 0.42, 1], ease: ["easeInOut", snap, "easeIn", springy] },
);
const give = pose(
	{ y: [0, 0, 2, 0] },
	{ duration: 0.72, times: [0, 0.4, 0.48, 1], ease: ["easeInOut", snap, springy] },
);
const bar = pose(
	{ y: [0, 0, 1.5, 0] },
	{ duration: 0.72, times: [0, 0.42, 0.5, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "baseline",
	render: (part) => (
		<>
			<motion.path {...part(give)} d="M4 20h16" />
			<motion.g {...part(leap)}>
				<path d="m6 16 6-12 6 12" />
				<motion.g {...part(bar)}>
					<path d="M8 12h8" />
				</motion.g>
			</motion.g>
		</>
	),
});
