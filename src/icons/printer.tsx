import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

const timing = { duration: 0.8, times: [0, 0.3, 0.7, 1] };

export default createAnimatedIcon({
	name: "printer",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ scaleY: [1, 0.96, 1, 1] }, timing))}
				d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
				style={edge(0.5, 1)}
			/>
			<motion.path {...part(pose({ y: [0, 2, 0, 0] }, timing))} d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6" />
			<motion.rect {...part(pose({ y: [0, -3, 0, 0] }, timing))} height="8" rx="1" width="12" x="6" y="14" />
		</>
	),
});
