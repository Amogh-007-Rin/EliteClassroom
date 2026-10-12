"use client";

import { MonitorIcon, MoonStarIcon, SunIcon } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import type { JSX } from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";


interface ThemeOptionsProps {
    icon: JSX.Element;
    value: string;
    isActive?: boolean;
    onClick: (value: string) => void;
}

function ThemeOption({ icon, value, isActive, onClick }: ThemeOptionsProps){
    
    return (
        <button
            type="button"
            className={cn(
                "relative flex size-8 cursor-pointer items-center justify-center rounded-full transition-all [&_svg]:size-4",
                isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-primary-foreground"
            )}
            role="radio"
            aria-checked={isActive}
            aria-label={`Switch to ${value} theme`}
            onClick={() => onClick(value)}
        >
            {icon}
            {isActive && (
                <motion.div
                    layoutId="theme-option"
                    transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                    className="absolute inset-0 rounded-full border border-primary-foreground/40"
                />
            )}
        </button>
    );
}

const THEME_OPTIONS = [
    {
        icon: <MonitorIcon />,
        value: "system",
    },
    {
        icon: <SunIcon />,
        value: "light",
    },
    {
        icon: <MoonStarIcon />,
        value: "dark",
    },
];

export default function ThemeSwitcherButton() {
    const { theme, setTheme } = useTheme();

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return <div className="flex h-8 w-24 rounded-full bg-muted" />;
    }

    return (
        <motion.div
            key={String(isMounted)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center overflow-hidden rounded-full bg-primary ring-1 ring-primary-foreground/20 ring-inset"
            role="radiogroup"
        >
            {THEME_OPTIONS.map((option) => (
                <ThemeOption
                    key={option.value}
                    icon={option.icon}
                    value={option.value}
                    isActive={theme === option.value}
                    onClick={setTheme}
                />
            ))}
        </motion.div>
    );
}


