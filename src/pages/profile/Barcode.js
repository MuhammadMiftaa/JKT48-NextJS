import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";
import { createCanvas } from "canvas";
import Image from "next/image";

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

  return <Image className={classname} ref={canvasRef} alt={`Barcode for ${value}`} width={1000} height={1000} />;
};

export default Barcode;