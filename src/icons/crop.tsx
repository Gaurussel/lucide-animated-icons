import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const squeeze = (d: number) =>
	pose({ x: [0, d, 0], y: [0, -d, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "crop",
	render: (part) => (
		<>
			<motion.path {...part(squeeze(3))} d="M6 2v14a2 2 0 0 0 2 2h14" />
			<motion.path {...part(squeeze(-3))} d="M18 22V8a2 2 0 0 0-2-2H2" />
		</>
	),
});
