import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const book = (delay: number) =>
	pose({ y: [0, -2.4, 0] }, { duration: 0.5, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const lean = pose({ rotate: [0, 9.6, 0] }, { duration: 0.7, times: [0, 0.35, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "library",
	render: (part) => (
		<>
			<motion.path {...part(book(0))} d="M4 4v16" />
			<motion.path {...part(book(0.06))} d="M8 8v12" />
			<motion.path {...part(book(0.12))} d="M12 6v14" />
			<motion.path {...part(lean)} d="m16 6 4 14" style={pivot(20, 20)} />
		</>
	),
});
