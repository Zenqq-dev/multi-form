import React, { useContext } from "react";
import AddonItem from "./AddonItem";
import StepContext from "./context/stepsContext/StepContext";

export default function AddOn() {
  const { addOns, setActiveAddOns, activeAddOns } = useContext(StepContext);

  const onClick = (addon) => {
    const index = activeAddOns.findIndex((item) => item.id === addon.id);
    if (index !== -1) {
      const updatedActiveAddOns = [...activeAddOns.slice(0, index), ...activeAddOns.slice(index + 1)];
      setActiveAddOns(updatedActiveAddOns);
    } else {
      setActiveAddOns([...activeAddOns, addon]);
    }
  };

  function checkActive(a) {
    for (let i = 0; i < activeAddOns.length; i++) {
      if (activeAddOns[i].id === a) return true;
    }
    return false;
  }

  return (
    <div>
      {addOns.map((p, i) => {
        return (
          <AddonItem
            title={p.title}
            subtitle={p.subtitle}
            price={p.price}
            key={i}
            func={() => onClick(p)}
            active={checkActive(i)}
          />
        );
      })}
    </div>
  );
}
