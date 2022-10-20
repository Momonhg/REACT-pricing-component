import React from "react";
import Info from "./Info";
import packages from "../packages";

function Annually() {
  return (
    <div className="row">
        {packages.map((infoPackage)=>(
<Info
key={infoPackage.key}
name={infoPackage.name}
price={infoPackage.aprice}
storage={infoPackage.storage}
user={infoPackage.user}
ggused={infoPackage.ggused}
/>
        ))}

    </div>
  );
}

export default Annually;
