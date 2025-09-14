// import Image from "next/image";

// export default function Facilities() {
//   return (
//     <section className="w-4/5 mx-auto text-center py-16">
//       <h1 className="text-3xl font-bold">Our Facilities</h1>
//       <p className="text-gray-600 mt-3">
//         State of the art facilities for students.
//       </p>

//       <div className="mt-10 grid md:grid-cols-3 gap-8">
//         <div>
//           <Image
//             src={"./img-1"}
//             className="rounded-lg shadow hover:shadow-xl transition"
//           />
//           <h3 className="text-xl font-semibold mt-4">World Class Library</h3>
//           <p className="text-gray-600 mt-2">
//             Thousands of books and journals available.
//           </p>
//         </div>
//         <div>
//           <img
//             src="/image/basketball.png"
//             className="rounded-lg shadow hover:shadow-xl transition"
//           />
//           <h3 className="text-xl font-semibold mt-4">Play Ground</h3>
//           <p className="text-gray-600 mt-2">
//             Sports facilities for holistic growth.
//           </p>
//         </div>
//         <div>
//           <img
//             src="/image/cafeteria.png"
//             className="rounded-lg shadow hover:shadow-xl transition"
//           />
//           <h3 className="text-xl font-semibold mt-4">Tasty and Healthy Food</h3>
//           <p className="text-gray-600 mt-2">Nutritious meals served daily.</p>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function Facilities() {
  return (
    <section className="w-4/5 mx-auto text-center py-16">
      <h1 className="text-3xl font-bold">Our Activities</h1>
      <p className="text-gray-600 mt-3">
        State of the art facilities for students.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {/* Library */}
        <div>
          <Image
            src="orent1.jpg"
            alt="World Class Library"
            width={400}
            height={300}
            className="rounded-lg shadow hover:shadow-xl transition"
          />
          <h3 className="text-xl font-semibold mt-4">Orientation</h3>
          <p className="text-gray-600 mt-2">Batch 2020 Orientation.</p>
        </div>

        {/* Playground */}
        <div>
          <Image
            src="orent2.jpg"
            alt="Play Ground"
            width={400}
            height={300}
            className="rounded-lg shadow hover:shadow-xl transition"
          />
          <h3 className="text-xl font-semibold mt-4">Orientation</h3>
          <p className="text-gray-600 mt-2">Batch 2021 Orientation.</p>
        </div>

        {/* Cafeteria */}
        <div>
          <Image
            src="orent3.jpg"
            alt="Tasty and Healthy Food"
            width={400}
            height={300}
            className="rounded-lg shadow hover:shadow-xl transition"
          />
          <h3 className="text-xl font-semibold mt-4">Orientation</h3>
          <p className="text-gray-600 mt-2">Batch 2021 Orientation.</p>
        </div>
      </div>

      <div className="mt-10 grid md:grid-cols-3 gap-8">
        {/* Library */}
        <div>
          <Image
            src="holi1.jpg"
            alt="World Class Library"
            width={400}
            height={300}
            className="rounded-lg shadow hover:shadow-xl transition"
          />
          <h3 className="text-xl font-semibold mt-4">Happy Holi</h3>
          <p className="text-gray-600 mt-2">Holi Celebration</p>
        </div>

        {/* Playground */}
        <div>
          <Image
            src="holi2.jpg"
            alt="Play Ground"
            width={400}
            height={300}
            className="rounded-lg shadow hover:shadow-xl transition"
          />
          <h3 className="text-xl font-semibold mt-4">Happy Holi</h3>
          <p className="text-gray-600 mt-2">Holi Celebration.</p>
        </div>

        {/* Cafeteria */}
        <div>
          <Image
            src="holi3.jpg"
            alt="Tasty and Healthy Food"
            width={400}
            height={300}
            className="rounded-lg shadow hover:shadow-xl transition"
          />
          <h3 className="text-xl font-semibold mt-4">Happy Holi </h3>
          <p className="text-gray-600 mt-2">Holi celebration .</p>
        </div>
      </div>
    </section>
  );
}
