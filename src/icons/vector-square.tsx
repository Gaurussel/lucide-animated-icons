import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, rubber, snap } from "../helpers.ts";

const drag = (x: number, y: number) =>
	pose({ x: [0, x, 0], y: [0, y, 0] }, { duration: 0.7, times: [0, 0.25, 1], ease: [snap, rubber] });

export default createAnimatedIcon({
	name: "vector-square",
	render: (part) => (
		<>
			<motion.path {...part(drag(1.5, 0))} d="M19.5 7a24 24 0 0 1 0 10" />
			<motion.path {...part(drag(-1.5, 0))} d="M4.5 7a24 24 0 0 0 0 10" />
			<motion.path {...part(drag(0, 1.5))} d="M7 19.5a24 24 0 0 0 10 0" />
			<motion.path {...part(drag(0, -1.5))} d="M7 4.5a24 24 0 0 1 10 0" />
			<motion.rect {...part(drag(2, 2))} height="5" rx="1" width="5" x="17" y="17" />
			<motion.rect {...part(drag(2, -2))} height="5" rx="1" width="5" x="17" y="2" />
			<motion.rect {...part(drag(-2, 2))} height="5" rx="1" width="5" x="2" y="17" />
			<motion.rect {...part(drag(-2, -2))} height="5" rx="1" width="5" x="2" y="2" />
		</>
	),
});
