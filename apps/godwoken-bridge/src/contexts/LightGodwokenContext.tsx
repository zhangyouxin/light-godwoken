import detectEthereumProvider from "@metamask/detect-provider";
import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  LightGodwokenV1,
  LightGodwokenV0,
  LightGodwoken as DefaultLightGodwoken,
  LightGodwokenProvider as DefaultLightGodwokenProvider,
} from "light-godwoken";

export const LightGodwokenContext = createContext<DefaultLightGodwoken | undefined>(undefined);
LightGodwokenContext.displayName = "LightGodwokenContext";

export const Provider: React.FC = (props) => {
  const [lightGodwoken, setLightGodwoken] = useState<DefaultLightGodwoken>();
  const location = useLocation();
  useEffect(() => {
    detectEthereumProvider().then((ethereum: any) => {
      if (ethereum) {
        ethereum.request({ method: "eth_accounts" }).then((accounts: string[]) => {
          if (!accounts || !accounts[0]) return;

          if (location.pathname.startsWith("/v0") && lightGodwoken?.getVersion() !== "v0") {
            console.log("setting godwoken to v0");
            const lightGodwokenV0 = new LightGodwokenV0(new DefaultLightGodwokenProvider(accounts[0], ethereum, "v0"));
            setLightGodwoken(lightGodwokenV0);
          } else if (location.pathname.startsWith("/v1") && lightGodwoken?.getVersion() !== "v1") {
            console.log("setting godwoken to v1");
            const lightGodwokenV1 = new LightGodwokenV1(new DefaultLightGodwokenProvider(accounts[0], ethereum, "v1"));
            setLightGodwoken(lightGodwokenV1);
          }
        });

        ethereum.on("accountsChanged", (accounts: string[] | undefined) => {
          if (!accounts || !accounts[0]) return setLightGodwoken(undefined);

          let instance: DefaultLightGodwoken;
          if (location.pathname.startsWith("/v0")) {
            instance = new LightGodwokenV0(new DefaultLightGodwokenProvider(accounts[0], ethereum, "v0"));
          } else {
            instance = new LightGodwokenV1(new DefaultLightGodwokenProvider(accounts[0], ethereum, "v1"));
          }
          setLightGodwoken(instance);
        });
      } else {
        alert("Please install MetaMask to use Godwoken Bridge!");
      }
    });
  }, [lightGodwoken, location.pathname]);

  return (
    <LightGodwokenContext.Provider value={lightGodwoken || undefined}>{props.children}</LightGodwokenContext.Provider>
  );
};
