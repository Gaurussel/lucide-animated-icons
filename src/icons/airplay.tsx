import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, jelly, pose, springy } from "../helpers.ts";

const cast = pose(
	{ y: [0, 0.9, -4.2, 3.6, 0], opacity: [1, 1, 0, 0, 1] },
	{ duration: 0.65, times: [0, 0.15, 0.35, 0.36, 1], ease: ["easeInOut", "easeIn", "easeInOut", springy] },
);

export default createAnimatedIcon({
	name: "airplay",
	render: (part) => (
		<>
			<motion.path
				{...part(jelly(0.32, 0.65))}
				d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(cast)} d="m12 15 5 6H7Z" />
		</>
	),
});
