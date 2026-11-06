import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const line = (delay: number) =>
	pose({ x: [0, -1.8, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const play = pose(
	{ x: [0, 1.8, 0], scale: [1, 1.21, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "list-video",
	render: (part) => (
		<>
			<motion.path {...part(line(0))} d="M16 6H3" />
			<motion.path {...part(line(0.07))} d="M12 12H3" />
			<motion.path {...part(line(0.14))} d="M12 18H3" />
			<motion.path {...part(play)} d="m16 12 5 3-5 3v-6Z" style={centered} />
		</>
	),
});
