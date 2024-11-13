import { useState } from "react";
import html2canvas from "html2canvas";
import Container from "../components/global/Container";
import { GoUpload } from "react-icons/go";

const Badge = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [shape, setShape] = useState("original");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setSelectedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const downloadBadge = async () => {
    const badgeElement = document.getElementById("badgePreview");
    const canvas = await html2canvas(badgeElement, { useCORS: true, backgroundColor: null });
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "badge.png";
    link.click();
  };

  const getShapeClass = () => {
    switch (shape) {
      case "circle":
        return "rounded-full";
      case "square":
        return "rounded-lg";
      default:
        return "";
    }
  };

  return (
    <Container>
      <div className="lg:grid lg:grid-cols-2 lg:p-8 md:p-8 p-2 min-h-[85vh] lg:space-y-0">
        <div className="flex flex-col items-center lg:items-start lg:col-span-1 space-y-6 place-content-center">
          <h1 className="text-4xl sm:text-5xl font-primaryBold py-4 mb-2 text-center lg:text-left">Badge</h1>
          <p className="text-gray-600 mb-4 text-center lg:text-left">
            Upload an image and generate a personalized badge with the DevFest frame.
          </p>
          <p className="text-xl font-primaryMedium text-gray-500">Image Shape</p>
          <div className="flex space-x-4 mt-2 mb-7">
            <button
              className={`py-2 px-4 border rounded-full ${shape === "original" ? "bg-blue-500 text-white" : "bg-white text-black"}`}
              onClick={() => setShape("original")}
            >
              ORIGINAL
            </button>
            <button
              className={`py-2 px-4 border rounded-full ${shape === "square" ? "bg-blue-500 text-white" : "bg-white text-black"}`}
              onClick={() => setShape("square")}
            >
              SQUARE
            </button>
            <button
              className={`py-2 px-4 border rounded-full ${shape === "circle" ? "bg-blue-500 text-white" : "bg-white text-black"}`}
              onClick={() => setShape("circle")}
            >
              CIRCLE
            </button>
          </div>

          <label className="bg-yellow-400 text-black px-4 py-2 rounded-full border border-black cursor-pointer hover:bg-yellow-500 flex items-center justify-center">
            Upload Image <GoUpload className="inline-block" size={20} />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </label>

          <p className="text-sm font-primaryMedium text-center">Upload high resolution image for best result</p>
        </div>

        <div className="flex flex-col justify-center lg:col-span-1">
          <div className="border border-black rounded-xl p-1 bg-gray-200">
            <div
              id="badgePreview"
              className={`relative border border-black w-full sm:w-96 h-full sm:h-96 mx-auto mt-6 flex items-center justify-center overflow-hidden ${getShapeClass()}`}
              style={{
                backgroundColor: "transparent",
                width: shape === "original" ? "20rem" : "16rem",
                height: shape === "original" ? "20rem" : "16rem",
              }}
            >
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Uploaded Background"
                  className="absolute inset-0 w-full h-full object-center object-cover z-0"
                  style={{ clipPath: shape === "circle" ? "circle(50%)" : "none" }}
                />
              )}
              <img
                src="https://utfs.io/f/Fp16c7Wd5HTuwGYhHUsTWKxGlkzCrbgVduSemt2Xc7ZvAE9p"
                alt="DevFest Frame"
                className="absolute inset-0 w-full h-full object-contain z-10 pointer-events-none"
              />
            </div>
          </div>
          <div>
            <button
              onClick={downloadBadge}
              className="mt-4 block bg-blue-500 w-max text-white py-2 px-6 rounded-full border border-black mx-auto hover:bg-blue-600"
            >
              Download Badge
            </button>
          </div>

          <p className="text-gray-500 mt-2 text-sm text-center w-3/4 mx-auto">
            * We respect your privacy and are not storing your pictures on our servers.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Badge;
