"use client"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type SectionTitleProps = {
    title: string;
    subtitle: string;
    className?: string;
}

const SectionTitle = ({title, subtitle, className}: SectionTitleProps) => {

    const animProps = {
        initial: { opacity: 0, x: -100 },
        whileInView: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 }
    }

    return ( 
        <div className={cn("flex flex-col gap-4", className)}>
            <motion.span
                className="text-sm text-primary/90"
                {...animProps}
                transition={{ duration: 0.5 }}
            >
                {`#${subtitle}`}
            </motion.span>
            <motion.h3
                className="text-3xl font-medium text-zinc-700"
                {...animProps}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {title}
            </motion.h3>
        </div>
     );
}
 
export default SectionTitle;
