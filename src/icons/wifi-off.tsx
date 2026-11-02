import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose, redraw, ring, snap } from "../helpers.ts";

const ping = pose({ y: [0, -3, 0], scale: [1, 2, 1] }, { duration: 0.6, times: [0, 0.25, 1], ease: [snap, ring] });
const droop = (delay: number) =>
	pose({ y: [0, 2.5, 0] }, { duration: 0.65, delay, times: [0, 0.2, 1], ease: [snap, ring] });

export default createAnimatedIcon({
	name: "wifi-off",
	render: (part) => (
		<>
			<motion.path {...part(ping)} d="M12 20h.01" style={centered} />
			<motion.path {...part(droop(0.04))} d="M8.5 16.429a5 5 0 0 1 7 0" />
			<motion.g {...part(droop(0.08))}>
				<path d="M5 12.859a10 10 0 0 1 5.17-2.69" />
				<path d="M19 12.859a10 10 0 0 0-2.007-1.523" />
			</motion.g>
			<motion.g {...part(droop(0.12))}>
				<path d="M2 8.82a15 15 0 0 1 4.177-2.643" />
				<path d="M22 8.82a15 15 0 0 0-11.288-3.764" />
			</motion.g>
			<motion.path {...part(redraw(0.15, 0.55))} d="m2 2 20 20" />
		</>
	),
});
