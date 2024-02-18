type Props = {
  /** Three colors to select as a variant */
  variant?: "green" | "yellow" | "red";
};

/** Basic component to form a traffic light */
const Light = ({ variant = "green" }: Props) => {
  return (
    <div
      style={{
        background: variant,
        borderRadius: "50%",
        width: 50,
        height: 50,
      }}
    ></div>
  );
};

export default Light;
