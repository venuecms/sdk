"use client";

import { Site, getSite, setConfig } from "@venuecms/sdk";
import { ReactNode, createContext, useEffect, useState } from "react";

export const VenueContext = createContext<Site | undefined>(undefined);

// Instantiates the venue SDK with a siteKey. Revalidation is handled inside the
// SDK's fetch wrapper, so callers don't pass Next.js fetch options here.
export const VenueProvider = ({
  siteKey,
  children,
}: {
  siteKey: string;
  children: ReactNode;
}) => {
  const [instance, setInstance] = useState<Site | undefined>();

  useEffect(() => {
    setConfig({
      siteKey,
      options: { baseUrl: "/" },
    });

    getSite().then(({ data }) => setInstance(data));
  }, [siteKey]);

  return (
    <VenueContext.Provider value={instance}>{children}</VenueContext.Provider>
  );
};
