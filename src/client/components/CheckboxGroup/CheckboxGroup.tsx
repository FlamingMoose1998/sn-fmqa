/**
 * ChecboxGroup v1.0
 * 
 * CheckboxGroup is a generic typescript react component
 * It manages a group of checkboxes, each of which have their own label
 * and value. When any of the checkboxes is toggles, a callback function that 
 * can be provided is triggered, taking a Set of selected values as its argument
 * 
 */

import React, { useState, useMemo, Activity } from "react";

export interface ConfigurationOption {
  label: string;
  value: string;
}
export interface CheckboxGroupProps {
  name: string;
  label: string;
  configurationList: ConfigurationOption[];
  onChange: (selectedValues: Set<string>) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  name,
  label,
  configurationList,
  onChange,
}) => {
  const allValues = useMemo(() => getValues(configurationList), [configurationList]);
  const [selectedValues, setSelectedValues] = useState<Set<string>>(allValues);
  const [show, setShow] = useState(true);

  const updateAll = (value: boolean): void => {
    const newState = value ? allValues : new Set<string>()
    setSelectedValues(newState)
    if (typeof onChange === 'function'){
      onChange(newState);
    }
  }

  const toggle = (value: string) => {
    const newState = new Set<string>(selectedValues);
    if (newState.has(value)) {
      newState.delete(value);
    } else {
      newState.add(value);
    }

    setSelectedValues(newState);
    if (typeof onChange === 'function'){
      onChange(newState);
    }
  };

  return (
    <>
      <div className="cbg-label" onClick={() => setShow(!show)}>{label}</div>
      <Activity mode={show ? "visible" : "hidden"}>
        <button className="cbg-select-all" onClick={() => updateAll(true)}>Select all</button>
        <button className="cbg-select-none" onClick={() => updateAll(false)}>Deselect all</button>
        {configurationList.map((checkboxConfig, index) => {
 
          return (
            <li key={index} className="cbg-li">
              <label className="cbg-li-label">
                <input
                  className="cbg-li-input"
                  type="checkbox"
                  value={checkboxConfig.value}
                  checked={selectedValues.has(checkboxConfig.value)}
                  onChange={() => toggle(checkboxConfig.value)}
                />
                {checkboxConfig.label}
              </label>
            </li>
          );
        })}
      </Activity>
    </>
  );
};

function getValues(configurationList: ConfigurationOption[]): Set<string> {
  // converts any item that is a string to an object with value/label
  // returns a set containing all values
  const allValues = new Set<string>();

  configurationList.forEach(item => {
    allValues.add(item.value);
  })

  return allValues;
}