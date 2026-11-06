import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pivot, pose, ring, snap, springy } from "../helpers.ts";

const bob = (delay: number) =>
	pose({ y: [0, -1.8, 0] }, { duration: 0.55, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const lean = pose({ rotate: [0, 10.8, 0] }, { duration: 0.7, delay: 0.1, times: [0, 0.22, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "square-library",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.45, 0.72))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.path {...part(bob(0))} d="M7 7v10" />
			<motion.path {...part(bob(0.06))} d="M11 7v10" />
			<motion.path {...part(lean)} d="m15 7 2 10" style={pivot(17, 17)} />
		</>
	),
});
