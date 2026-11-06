import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, rubber, snap, springy } from "../helpers.ts";

const strike = pose(
	{ x: [0, 2.4, 0], y: [0, -2.4, 0], rotate: [0, -72, 0], opacity: [1, 0.3, 1] },
	{ duration: 0.7, times: [0, 0.25, 1], ease: ["easeInOut", springy] },
);
const jolt = pose(
	{ y: [0, 0, 0.9, 0] },
	{ duration: 0.75, times: [0, 0.33, 0.4, 1], ease: ["easeInOut", snap, rubber] },
);

export default createAnimatedIcon({
	name: "screen-share-off",
	render: (part) => (
		<>
			<motion.g {...part(jolt)}>
				<path d="M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3" />
				<path d="M8 21h8" />
				<path d="M12 17v4" />
			</motion.g>
			<motion.g {...part(strike)} style={pivot(19.5, 5.5)}>
				<path d="m22 3-5 5" />
				<path d="m17 3 5 5" />
			</motion.g>
		</>
	),
});
