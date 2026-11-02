import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, snap, springy } from "../helpers.ts";

const blink = (delay: number) =>
	pose({ scale: [1, 0.3, 1] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const dot = (delay: number) =>
	pose(
		{ scale: [1, 0, 2.5, 1] },
		{ duration: 0.4, delay, times: [0, 0.1, 0.4, 1], ease: ["easeIn", "easeOut", springy] },
	);

export default createAnimatedIcon({
	name: "qr-code",
	render: (part) => (
		<>
			<motion.rect {...part(blink(0))} height="5" rx="1" style={centered} width="5" x="3" y="3" />
			<motion.rect {...part(blink(0.08))} height="5" rx="1" style={centered} width="5" x="16" y="3" />
			<motion.rect {...part(blink(0.16))} height="5" rx="1" style={centered} width="5" x="3" y="16" />
			<motion.path {...part(redraw(0.3, 0.35))} d="M21 16h-3a2 2 0 0 0-2 2v3" />
			<motion.path {...part(dot(0.34))} d="M21 21v.01" style={centered} />
			<motion.path {...part(redraw(0.2, 0.35))} d="M12 7v3a2 2 0 0 1-2 2H7" />
			<motion.path {...part(dot(0.22))} d="M3 12h.01" style={centered} />
			<motion.path {...part(dot(0.12))} d="M12 3h.01" style={centered} />
			<motion.path {...part(dot(0.28))} d="M12 16v.01" style={centered} />
			<motion.path {...part(redraw(0.26, 0.3))} d="M16 12h1" />
			<motion.path {...part(dot(0.3))} d="M21 12v.01" style={centered} />
			<motion.path {...part(redraw(0.32, 0.3))} d="M12 21v-1" />
		</>
	),
});
