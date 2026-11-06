import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, ring, snap, springy } from "../helpers.ts";

const turn = pose({ scaleX: [1, -0.2, 1] }, { duration: 0.72, times: [0, 0.4, 1], ease: ["easeInOut", springy] });
const sway = pose(
	{ rotate: [0, 0, -6, 0] },
	{ duration: 0.72, times: [0, 0.35, 0.48, 1], ease: ["easeInOut", snap, ring] },
);
const cap = pose(
	{ y: [0, 0, -1.2, 0] },
	{ duration: 0.6, delay: 0.1, times: [0, 0.3, 0.45, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "signpost",
	render: (part) => (
		<>
			<path d="M12 13v8" />
			<motion.path {...part(cap)} d="M12 3v3" />
			<motion.g {...part(sway)} style={pivot(12, 6)}>
				<motion.path
					{...part(turn)}
					d="M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"
					style={pivot(12, 9.5)}
				/>
			</motion.g>
		</>
	),
});
