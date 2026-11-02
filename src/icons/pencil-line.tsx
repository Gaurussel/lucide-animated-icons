import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "pencil-line",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 0, 1, 1] }, { duration: 0.9, times: [0, 0.15, 0.25, 0.75, 1] }))}
				d="M12 20h9"
			/>
			<motion.g
				{...part(
					pose(
						{ x: [0, 0, 0, 4, 0], y: [0, 0, -1, -1, 0] },
						{ duration: 0.9, times: [0, 0.15, 0.25, 0.75, 1] },
					),
				)}
			>
				<path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
				<path d="m15 5 3 3" />
			</motion.g>
		</>
	),
});
