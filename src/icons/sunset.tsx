import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "sunset",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 2, 0, 0] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}>
				<path d="M12 10V2" />
				<path d="m16 6-4 4-4-4" />
			</motion.g>
			<motion.g {...part(pose({ y: [0, 0, 2.5, 0] }, { duration: 0.8, times: [0, 0.3, 0.7, 1] }))}>
				<path d="m4.93 10.93 1.41 1.41" />
				<path d="M2 18h2" />
				<path d="M20 18h2" />
				<path d="m19.07 10.93-1.41 1.41" />
				<path d="M16 18a4 4 0 0 0-8 0" />
			</motion.g>
			<path d="M22 22H2" />
		</>
	),
});
