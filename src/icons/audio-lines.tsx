import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, snap, springy } from "../helpers.ts";

const wave = (scale: number, delay: number) =>
	pose({ scaleY: [1, scale, 1] }, { duration: 0.45, delay, times: [0, 0.3, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "audio-lines",
	render: (part) => (
		<>
			<motion.path {...part(wave(3, 0))} d="M2 10v3" style={centered} />
			<motion.path {...part(wave(1.8, 0.06))} d="M6 6v11" style={centered} />
			<motion.path {...part(wave(0.25, 0.12))} d="M10 3v18" style={centered} />
			<motion.path {...part(wave(2.6, 0.18))} d="M14 8v7" style={centered} />
			<motion.path {...part(wave(0.3, 0.24))} d="M18 5v13" style={centered} />
			<motion.path {...part(wave(3, 0.3))} d="M22 10v3" style={centered} />
		</>
	),
});
