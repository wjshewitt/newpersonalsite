import Image from "next/image";

export default function Test() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Dither Plugin Test</h1>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Original Image</h2>
          <Image
              src="/1754924698112.jpeg"
              alt="Flower"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dither Effect (Normal)</h2>
          <div className="dither">
            <Image
              src="/1754924698112.jpeg"
              alt="Flower with dither"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Dither Effect (Large)</h2>
          <div className="dither-xl">
            <Image
              src="/1754924698112.jpeg"
              alt="Flower with large dither"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Generated Image - Three Sizes</h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">Small (200px)</h3>
              <Image
                src="/generated-image.png"
                alt="Generated Image Small"
                width={200}
                height={200}
                className="rounded-md shadow-md"
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">Medium (350px)</h3>
              <Image
                src="/generated-image.png"
                alt="Generated Image Medium"
                width={350}
                height={350}
                className="rounded-md shadow-md"
              />
            </div>

            <div className="text-center">
              <h3 className="text-lg font-semibold mb-3">Large (500px)</h3>
              <Image
                src="/generated-image.png"
                alt="Generated Image Large"
                width={500}
                height={500}
                className="rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}