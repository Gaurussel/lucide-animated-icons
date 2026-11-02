import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "ethernet-port",
	render: (part) => (
		<>
			<motion.g {...part(pose({ y: [0, 1, 0] }, { duration: 0.8, times: [0, 0.5, 1] }))}>
				<path d="m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 0.3, 1] }, { duration: 0.5, delay: 0.05, times: [0, 0.4, 1] }))}
				style={edge(0.5, 0)}
			>
				<path d="M6 8v1" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 0.3, 1] }, { duration: 0.5, delay: 0.13, times: [0, 0.4, 1] }))}
				style={edge(0.5, 0)}
			>
				<path d="M10 8v1" />
			</motion.g>
			<motion.g
				{...part(
					pose({ scaleY: [1, 0.3, 1] }, { duration: 0.5, delay: 0.21000000000000002, times: [0, 0.4, 1] }),
				)}
				style={edge(0.5, 0)}
			>
				<path d="M14 8v1" />
			</motion.g>
			<motion.g
				{...part(pose({ scaleY: [1, 0.3, 1] }, { duration: 0.5, delay: 0.29, times: [0, 0.4, 1] }))}
				style={edge(0.5, 0)}
			>
				<path d="M18 8v1" />
			</motion.g>
		</>
	),
});
