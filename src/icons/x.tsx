import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, rubber, snap } from "../helpers.ts";

const fold = (degrees: number, at: number) =>
	pose(
		{ rotate: [0, -degrees / 4, degrees, 0] },
		{ duration: 0.72, times: [0, at, at + 0.18, 1], ease: ["easeInOut", snap, rubber] },
	);

export default createAnimatedIcon({
	name: "x",
	render: (part) => (
		<>
			<motion.path {...part(fold(45, 0.1))} d="M18 6 6 18" style={centered} />
			<motion.path {...part(fold(45, 0.16))} d="m6 6 12 12" style={centered} />
		</>
	),
});
