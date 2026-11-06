import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose, snap, springy } from "../helpers.ts";

const sun = pose(
	{ y: [0, 1.2, -2.1, 0] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 1], ease: ["easeInOut", snap, springy] },
);
const press = pose(
	{ x: [0, 0, 1.2, 0], scale: [1, 0.82, 1.15, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.35, 1], ease: ["easeInOut", snap, springy] },
);

export default createAnimatedIcon({
	name: "image-play",
	render: (part) => (
		<>
			<path d="m11 16-5 5" />
			<path d="M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5" />
			<motion.path
				{...part(press)}
				d="M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
				style={pivot(18, 17.5)}
			/>
			<motion.circle {...part(sun)} cx="9" cy="9" r="2" />
		</>
	),
});
