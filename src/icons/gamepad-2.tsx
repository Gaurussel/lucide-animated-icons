import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pivot, pose, ring, snap, springy } from "../helpers.ts";

const rumble = pose({ rotate: [0, -14, 0] }, { duration: 0.75, times: [0, 0.15, 1], ease: [snap, ring] });
const press = (delay: number) =>
	pose({ scale: [1, 3, 1] }, { duration: 0.5, delay, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "gamepad-2",
	render: (part) => (
		<motion.g {...part(rumble)} style={pivot(12, 12)}>
			<line x1="6" x2="10" y1="11" y2="11" />
			<line x1="8" x2="8" y1="9" y2="13" />
			<motion.line {...part(press(0.1))} style={centered} x1="15" x2="15.01" y1="12" y2="12" />
			<motion.line {...part(press(0.22))} style={centered} x1="18" x2="18.01" y1="10" y2="10" />
			<path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z" />
		</motion.g>
	),
});
