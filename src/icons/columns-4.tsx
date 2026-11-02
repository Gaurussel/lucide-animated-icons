import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, springy } from "../helpers.ts";

const slideTo = (x: number, delay: number) =>
	pose(
		{ x: [0, 1, x, 0] },
		{ duration: 0.65, delay, times: [0, 0.12, 0.32, 1], ease: ["easeInOut", "easeIn", springy] },
	);

export default createAnimatedIcon({
	name: "columns-4",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.32, 0.75))} height="18" rx="2" style={edge(0, 0.5)} width="18" x="3" y="3" />
			<motion.path {...part(slideTo(-3.5, 0.0))} d="M7.5 3v18" />
			<motion.path {...part(slideTo(-7, 0.06))} d="M12 3v18" />
			<motion.path {...part(slideTo(-10.5, 0.12))} d="M16.5 3v18" />
		</>
	),
});
