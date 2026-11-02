import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pivot, pose } from "../helpers.ts";

export default createAnimatedIcon({
	name: "paintbrush",
	render: (part) => (
		<>
			<motion.g
				{...part(pose({ rotate: [0, -14, 6, 0] }, { duration: 0.7, times: [0, 0.3, 0.7, 1] }))}
				style={pivot(20, 4)}
			>
				<path d="m14.622 17.897-10.68-2.913" />
				<path d="M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z" />
				<motion.path
					{...part(pose({ pathLength: [1, 0.3, 1] }, { duration: 0.5, delay: 0.3 }))}
					d="M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
				/>
			</motion.g>
		</>
	),
});
