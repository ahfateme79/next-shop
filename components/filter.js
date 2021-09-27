import { TreeSelect } from "antd";
import { useState } from "react";
import { Slider } from "antd";

const treeData = [
  {
    title: "show 10 products",
    value: "0-0",
  },
  {
    title: "show 15 products",
    value: "0-1",
  },
  {
    title: "show 20 products",
    value: "0-2",
  },
];
function onChange(value) {
  console.log("onChange: ", value);
}

function onAfterChange(value) {
  console.log("onAfterChange: ", value);
}
const Filter = () => {
  return (
    <>
      <TreeSelect
        style={{ width: "100%" }}
        dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
        treeData={treeData}
        placeholder="Please select"
        treeDefaultExpandAll
      />
      <Slider
        range
        step={10}
        defaultValue={[20, 50]}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </>
  );
};
export default Filter;
