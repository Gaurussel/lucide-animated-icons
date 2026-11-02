import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const reel = (delay: number) =>
	pose({ scale: [1, 1.35, 1], y: [0, -2, 0] }, { duration: 0.6, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "voicemail",
	render: (part) => (
		<>
			<motion.circle {...part(reel(0))} cx="6" cy="12" r="4" style={centered} />
			<motion.circle {...part(reel(0.12))} cx="18" cy="12" r="4" style={centered} />
			<motion.line {...part(redraw(0.05, 0.55))} x1="6" x2="18" y1="16" y2="16" />
		</>
	),
});
