import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const press = pose(
	{ y: [0, -1.5, 3, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.25, 1], ease: ["easeInOut", snap, ring] },
);
const kick = pose(
	{ rotate: [0, 0, 25, 0] },
	{ duration: 0.75, times: [0, 0.25, 0.4, 1], ease: ["easeInOut", "easeOut", ring] },
);

export default createAnimatedIcon({
	name: "power-off",
	render: (part) => (
		<>
			<motion.g {...part(kick)} style={pivot(12, 12)}>
				<motion.path {...part(redraw(0.22, 0.45))} d="M18.36 6.64A9 9 0 0 1 20.77 15" />
				<motion.path {...part(redraw(0.22, 0.5))} d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
			</motion.g>
			<motion.path {...part(press)} d="M12 2v4" />
			<motion.path {...part(redraw(0.4, 0.3))} d="m2 2 20 20" />
		</>
	),
});
