import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap, springy } from "../helpers.ts";

const flick = pose(
	{ y: [0, 1.5, -5, 0] },
	{ duration: 0.65, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", "easeIn", springy] },
);
const recoil = pose(
	{ y: [0, 0, -1.2, 0] },
	{ duration: 0.75, times: [0, 0.35, 0.43, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "rows-2",
	render: (part) => (
		<>
			<motion.rect {...part(recoil)} height="18" rx="2" width="18" x="3" y="3" />
			<motion.path {...part(flick)} d="M3 12h18" />
		</>
	),
});
