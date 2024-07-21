import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";
import { createCanvas } from "canvas";

const Barcode = ({ value, classname }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = createCanvas();
    JsBarcode(canvas, value, { format: "CODE128" });
    const img = canvas.toDataURL();
    if (canvasRef.current) {
      canvasRef.current.src = img;
    }
  }, [value]);

  return <img className={classname} ref={canvasRef} alt={`Barcode for ${value}`} />;
};

export default Barcode;