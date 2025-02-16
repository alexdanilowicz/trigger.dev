import classNames from "classnames";
import React, { memo } from "react";

export type TooltipProps = {
  children: React.ReactNode;
  text: string;
  className?: string;
};

export const Tooltip: React.FC<TooltipProps> = memo((props) => {
  return (
    <span className={classNames("group relative z-50 flex", props.className)}>
      <span className="pointer-events-none absolute -top-10 left-1/2 flex -translate-x-1/2 items-center justify-center whitespace-nowrap rounded bg-slate-1000 px-2 py-1 text-xs text-slate-400 opacity-0 transition delay-300 duration-200 ease-in-out before:absolute before:left-1/2 before:top-full before:-translate-x-1/2 before:border-4 before:border-transparent before:border-t-black before:content-[''] group-hover:opacity-100">
        {props.text}
      </span>
      {props.children}
    </span>
  );
});

Tooltip.displayName = "Tooltip";
