import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "smartphone-nfc",
	render: (part) => (
		<>
			<motion.g {...part(pose({ x: [0, -1.5, 0] }, { duration: 0.8, times: [0, 0.4, 1] }))}>
				<rect height="12" rx="1" width="7" x="2" y="6" />
			</motion.g>
			<motion.path
				{...part(
					pose({ x: [0, 2, 0], opacity: [1, 0.1, 1] }, { duration: 0.5, times: [0, 0.5, 1], delay: 0.15 }),
				)}
				d="M13 8.32a7.43 7.43 0 0 1 0 7.36"
			/>
			<motion.path
				{...part(
					pose({ x: [0, 2, 0], opacity: [1, 0.1, 1] }, { duration: 0.5, times: [0, 0.5, 1], delay: 0.25 }),
				)}
				d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58"
			/>
			<motion.path
				{...part(
					pose({ x: [0, 2, 0], opacity: [1, 0.1, 1] }, { duration: 0.5, times: [0, 0.5, 1], delay: 0.35 }),
				)}
				d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"
			/>
		</>
	),
});
