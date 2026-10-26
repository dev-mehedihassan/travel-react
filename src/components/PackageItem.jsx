import React from 'react'

const PackageItem = ({ name, price }) => {
  return (
    <div className="package_item">
      <div className="package_item_inner">
        <h3 className="sec_title">{name}</h3>

        <h3 className="sec_title price">{price}</h3>

        <h5>Per Month</h5>

        <ul>
          {features.map((item, index) => (
            <li key={index}>
              <GoCheckCircleFill
                className={item.disabled ? "disable" : ""}
              />
              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <Anchor href={"#"} style={"package_btn"}>
          Get Started
        </Anchor>
      </div>

      <Paragraph
        style={"paragraph trial"}
        text="4 Days Trial Available"
      />
    </div>
  )
}

export default PackageItem