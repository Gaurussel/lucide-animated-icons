import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, snap, springy } from "../helpers.ts";

const press = pose(
	{ x: [0, 3, 0], scale: [1, 1.35, 1] },
	{ duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] },
);

export default createAnimatedIcon({
	name: "square-play",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.3, 0.65))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.path {...part(press)} d="m9 8 6 4-6 4Z" style={centered} />
		</>
	),
});
