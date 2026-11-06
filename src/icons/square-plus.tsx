import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, rubber } from "../helpers.ts";

const nod = pose(
	{ rotate: [0, -12, 0], scale: [1, 0.91, 1] },
	{ duration: 0.68, times: [0, 0.2, 1], ease: ["easeInOut", rubber] },
);

export default createAnimatedIcon({
	name: "square-plus",
	render: (part) => (
		<>
			<motion.rect {...part(jelly(0.4, 0.68))} height="18" rx="2" style={centered} width="18" x="3" y="3" />
			<motion.g {...part(nod)} style={centered}>
				<path d="M8 12h8" />
				<path d="M12 8v8" />
			</motion.g>
		</>
	),
});
