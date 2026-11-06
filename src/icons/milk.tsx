import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const pour = pose({ rotate: [0, -14.4, 0] }, { duration: 0.75, times: [0, 0.25, 1], ease: [snap, ring] });
const slosh = pose({ x: [0, -0.9, 0], y: [0, -0.9, 0] }, { duration: 0.75, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "milk",
	render: (part) => (
		<motion.g {...part(pour)} style={pivot(12, 22)}>
			<path d="M8 2h8" />
			<path d="M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2" />
			<motion.path {...part(slosh)} d="M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0" />
		</motion.g>
	),
});
