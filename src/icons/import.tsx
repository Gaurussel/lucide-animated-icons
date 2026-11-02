import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "import",
	render: (part) => (
		<>
			<motion.g
				{...part(
					pose(
						{ y: [0, -1.5, 6, -6, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.75, times: [0, 0.18, 0.5, 0.51, 1] },
					),
				)}
			>
				<path d="M12 3v12" />
				<path d="m8 11 4 4 4-4" />
			</motion.g>
			<motion.path
				{...part(pose({ y: [0, 0, 1, 0] }, { duration: 0.75, times: [0, 0.3, 0.5, 1] }))}
				d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"
			/>
		</>
	),
});
