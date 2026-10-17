import { createContext } from "react";

/** Scoped to the isolated edition pilot; normal articles render unchanged. */
export const EditionEmbedContext = createContext(false);
