import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose, snap, springy } from "../helpers.ts";

const shutter = (delay: number) =>
	pose({ y: [0, -3.6, 0], opacity: [1, 0, 1] }, { duration: 0.65, delay, times: [0, 0.3, 1], ease: [snap, springy] });
const roof = pose({ y: [0, -1.8, 0] }, { duration: 0.65, times: [0, 0.25, 1], ease: [snap, springy] });

export default createAnimatedIcon({
	name: "warehouse",
	render: (part) => (
		<>
			<path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11" />
			<motion.path
				{...part(roof)}
				d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"
			/>
			<motion.path {...part(shutter(0))} d="M6 13h12" />
			<motion.path {...part(shutter(0.06))} d="M6 17h12" />
		</>
	),
});
