import { motion } from "motion/react";
import { createAnimatedIcon } from "../createAnimatedIcon.tsx";
import { pose } from "../helpers.ts";

const fold = (dir: number) => pose({ y: [0, -dir, 2 * dir, 0] }, { duration: 0.7, times: [0, 0.2, 0.55, 1] });

export default createAnimatedIcon({
	name: "fold-vertical",
	render: (part) => (
		<>
			<motion.path {...part(fold(-1))} d="M12 22v-6" />
			<motion.path {...part(fold(1))} d="M12 8V2" />
			<path d="M4 12H2" />
			<path d="M10 12H8" />
			<path d="M16 12h-2" />
			<path d="M22 12h-2" />
			<motion.path {...part(fold(-1))} d="m15 19-3-3-3 3" />
			<motion.path {...part(fold(1))} d="m15 5-3 3-3-3" />
		</>
	),
});
