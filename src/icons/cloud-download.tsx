import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const lift = pose({ y: [0, -1.2, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: [snap, springy] });
const drop = pose(
	{ y: [0, -1.2, 4.8, -4.2, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.7, times: [0, 0.15, 0.38, 0.39, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "cloud-download",
	render: (part) => (
		<>
			<motion.path {...part(lift)} d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" />
			<motion.g {...part(drop)}>
				<path d="M12 13v8l-4-4" />
				<path d="m12 21 4-4" />
			</motion.g>
		</>
	),
});
