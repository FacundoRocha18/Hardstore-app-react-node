import { createContext, useContext } from "react";

/**
 * A hook to create a Context and Provider with no upfront default value, and
 * without having to check for undefined all the time.
 * @author Facundo Rocha
 * @returns [useContextCustom, context.Provider]
 */

export const createContextCustom = <A extends object | null>() => {
  const context = createContext<A | undefined>(undefined);

  const useContextCustom = () => {
    const c = useContext(context);
    if (c === undefined)
      throw new Error(
        "useContextCustom must be inside a Provider with a value",
      );
    return c;
  };

  return [useContextCustom, context.Provider] as const;
};
