import { MouseEventHandler } from "react";

interface IButton {
  children: string;
  onClick: clickEvent;
}

type clickEvent = MouseEventHandler<HTMLButtonElement>;

export type { IButton };
