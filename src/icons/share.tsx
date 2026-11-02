import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "share",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ y: [0, 1.5, -5, -4.444, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.8, times: [0, 0.18, 0.55, 0.6, 1] },
					),
				)}
			>
				<path d="M12 2v13" />
				<path d="m16 6-4-4-4 4" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, 0.8, 0, 0] }, { duration: 0.8, times: [0, 0.18, 0.5, 1] }))}
				d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
			/>
		</>
	),
});
