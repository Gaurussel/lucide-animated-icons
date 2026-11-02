import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const reach = pose(
	{ rotate: [0, -4, 14, 0] },
	{ duration: 0.75, times: [0, 0.12, 0.3, 1], ease: ["easeInOut", snap, springy] },
);
const nod = pose(
	{ rotate: [0, 0, -32, 0] },
	{ duration: 0.75, times: [0, 0.25, 0.4, 1], ease: ["easeInOut", snap, ring] },
);

export default createAnimatedIcon({
	name: "lamp-desk",
	render: (part) => (
		<>
			<motion.g {...part(reach)} style={pivot(7, 18)}>
				<motion.g {...part(nod)} style={pivot(10, 4)}>
					<path d="M10.293 2.293a1 1 0 0 1 1.414 0l2.5 2.5 5.994 1.227a1 1 0 0 1 .506 1.687l-7 7a1 1 0 0 1-1.687-.506l-1.227-5.994-2.5-2.5a1 1 0 0 1 0-1.414z" />
					<path d="m14.207 4.793-3.414 3.414" />
				</motion.g>
				<path d="m9.086 6.5-4.793 4.793a1 1 0 0 0-.18 1.17L7 18" />
			</motion.g>
			<path d="M3 20a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
		</>
	),
});
