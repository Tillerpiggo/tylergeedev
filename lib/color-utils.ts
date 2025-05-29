export async function getAverageColorFromImage(imageUrl: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous"; // Required for images from different origins
    img.src = imageUrl;

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject("Could not get canvas context");
        return;
      }
      ctx.drawImage(img, 0, 0);

      let r = 0, g = 0, b = 0;
      let count = 0;

      try {
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        const step = 4 * Math.max(1, Math.floor(data.length / (4 * 1000))); // Sample ~1000 pixels

        for (let i = 0; i < data.length; i += step) {
          // Ensure alpha is not 0 (fully transparent) to avoid skewing average
          if (data[i + 3] > 0) {
            r += data[i];
            g += data[i + 1];
            b += data[i + 2];
            count++;
          }
        }

        if (count > 0) {
          r = Math.floor(r / count);
          g = Math.floor(g / count);
          b = Math.floor(b / count);
          resolve(`rgba(${r}, ${g}, ${b}, 0.1)`); // Using 0.1 alpha for a subtle background tint
        } else {
          resolve("rgba(255, 255, 255, 0.1)"); // Default to light if no pixels or all transparent
        }
      } catch (e) {
        // This can happen due to CORS issues with canvas if crossOrigin is not set or server doesn't allow
        console.error("Error processing image for average color:", e);
        reject("Error processing image");
      }
    };

    img.onerror = (e) => {
      console.error("Error loading image for average color:", e);
      reject("Error loading image");
    };
  });
} 