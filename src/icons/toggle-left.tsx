import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, jelly, pose, rubber } from "../helpers.ts";

const flick = pose({ x: [0, 3.6, 0] }, { duration: 0.7, times: [0, 0.3, 1], ease: ["easeInOut", rubber] });

export default createAnimatedIcon({
	name: "toggle-left",
	render: (part) => (
		<>
			<motion.circle {...part(flick)} cx="9" cy="12" r="3" />
			<motion.rect {...part(jelly(0.3, 0.7))} height="14" rx="7" style={centered} width="20" x="2" y="5" />
		</>
	),
});
