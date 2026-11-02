import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { centered, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "asterisk",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, 0, -25, 0] }, { duration: 0.8, times: [0, 0.4, 0.8, 1] }))}
				style={centered}
			>
				<motion.path
					{...part(pose({ scale: [1, 0.55, 1, 1] }, { duration: 0.8, times: [0, 0.25, 0.5, 1] }))}
					d="M12 6v12"
					style={centered}
				/>
				<motion.path
					{...part(
						pose({ scale: [1, 0.55, 1, 1] }, { duration: 0.8, delay: 0.08, times: [0, 0.25, 0.5, 1] }),
					)}
					d="M17.196 9 6.804 15"
					style={centered}
				/>
				<motion.path
					{...part(
						pose({ scale: [1, 0.55, 1, 1] }, { duration: 0.8, delay: 0.16, times: [0, 0.25, 0.5, 1] }),
					)}
					d="m6.804 9 10.392 6"
					style={centered}
				/>
			</motion.g>
		</>
	),
});
