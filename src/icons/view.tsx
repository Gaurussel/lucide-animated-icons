import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap, springy } from "../helpers.ts";

const frame = (y: number) => pose({ y: [0, y, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });
const look = pose(
	{ x: [0, -2.1, 2.1, 0] },
	{ duration: 0.7, times: [0, 0.18, 0.42, 1], ease: [snap, "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "view",
	render: (part) => (
		<>
			<motion.path {...part(frame(2))} d="M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2" />
			<motion.path {...part(frame(-2))} d="M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2" />
			<motion.circle {...part(look)} cx="12" cy="12" r="1" />
			<path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0" />
		</>
	),
});
