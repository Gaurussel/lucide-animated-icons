import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap, springy } from "../helpers.ts";

const swap = (y: number, delay: number) =>
	pose(
		{ y: [0, -y / 4, y, 0] },
		{ duration: 0.62, delay, times: [0, 0.15, 0.4, 1], ease: ["easeInOut", "easeIn", springy] },
	);
const recoil = pose(
	{ y: [0, 0, 1, 0] },
	{ duration: 0.75, times: [0, 0.4, 0.48, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "rows-3",
	render: (part) => (
		<>
			<motion.rect {...part(recoil)} height="18" rx="2" width="18" x="3" y="3" />
			<motion.path {...part(swap(6, 0))} d="M21 9H3" />
			<motion.path {...part(swap(-6, 0.07))} d="M21 15H3" />
		</>
	),
});
