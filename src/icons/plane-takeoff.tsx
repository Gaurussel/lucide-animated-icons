import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "plane-takeoff",
	render: (part) => (
		<>
			<path d="M2 22h20" />
			<motion.path
				{...part(
					pose(
						{ x: [0, -1.5, 6, -8, 0], y: [0, 0.5, -5, 2, 0], opacity: [1, 1, 0, 0, 1] },
						{ duration: 0.9, times: [0, 0.2, 0.55, 0.56, 1] },
					),
				)}
				d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
			/>
		</>
	),
});
