import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap, springy } from "../helpers.ts";

const dash = (delay = 0) =>
	pose(
		{ y: [0, -0.9, 3, 0] },
		{ duration: 0.65, delay, times: [0, 0.18, 0.4, 1], ease: ["easeInOut", "easeIn", springy] },
	);
const recoil = pose(
	{ y: [0, 0, 0.9, 0] },
	{ duration: 0.75, times: [0, 0.38, 0.46, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "panel-bottom",
	render: (part) => (
		<>
			<motion.rect {...part(recoil)} height="18" rx="2" width="18" x="3" y="3" />
			<motion.path {...part(dash())} d="M3 15h18" />
		</>
	),
});
