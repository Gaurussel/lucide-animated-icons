import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, redraw, ring, snap } from "../helpers.ts";

const press = pose(
	{ y: [0, -1.5, 4, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.25, 1], ease: ["easeInOut", snap, ring] },
);
const kick = pose(
	{ rotate: [0, 0, 25, 0] },
	{ duration: 0.75, times: [0, 0.25, 0.4, 1], ease: ["easeInOut", "easeOut", ring] },
);

export default createAnimatedIcon({
	name: "power",
	render: (part) => (
		<>
			<motion.path {...part(press)} d="M12 2v10" />
			<motion.g {...part(kick)} style={pivot(12, 12)}>
				<motion.path {...part(redraw(0.22, 0.5))} d="M18.4 6.6a9 9 0 1 1-12.77.04" />
			</motion.g>
		</>
	),
});
