import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const timing = { duration: 0.8, times: [0, 0.45, 0.7, 1] };

export default createAnimatedIcon({
	name: "pen-off",
	render: (part) => (
		<>
			<motion.path
				{...part(pose({ x: [0, 0, -2.5, 0], y: [0, 0, 2.5, 0] }, timing))}
				d="m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
			/>
			<motion.path
				{...part(pose({ x: [0, 0, 2.5, 0], y: [0, 0, -2.5, 0] }, timing))}
				d="m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"
			/>
			<motion.path
				{...part(pose({ pathLength: [1, 0, 1, 1] }, { duration: 0.8, times: [0, 0.3, 0.6, 1] }))}
				d="m2 2 20 20"
			/>
		</>
	),
});
