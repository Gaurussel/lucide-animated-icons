import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "square-pen",
	render: (part) => (
		<>
			<path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
			<motion.path
				{...part(
					pose(
						{
							x: [0, -1.5, -0.5, -2, 0],
							y: [0, 1.5, 0.5, 2, 0],
							rotate: [0, -6, 4, -6, 0],
						},
						{ duration: 0.8, times: [0, 0.25, 0.5, 0.75, 1] },
					),
				)}
				d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
				style={edge(0, 1)}
			/>
		</>
	),
});
