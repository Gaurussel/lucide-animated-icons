import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { edge, pivot, pose } from "../helpers.ts";

const desk = pose({ y: [0, -1.5, 0] }, { duration: 0.7, times: [0, 0.4, 1] });
const arm = pose({ y: [0, -1.5, 0], rotate: [0, -8, 0] }, { duration: 0.7, times: [0, 0.4, 1] });
const stand = pose({ scaleY: [1, 0.92, 1] }, { duration: 0.7, times: [0, 0.4, 1] });

export default createAnimatedIcon({
	name: "lectern",
	render: (part) => (
		<>
			<motion.path
				{...part(desk)}
				d="M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"
			/>
			<motion.path {...part(arm)} d="M18 6V3a1 1 0 0 0-1-1h-3" style={pivot(18, 6)} />
			<motion.rect {...part(stand)} height="12" rx="1" style={edge(0.5, 1)} width="8" x="8" y="10" />
		</>
	),
});
