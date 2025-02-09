import Image from 'next/image';

interface Machine {
  id: number;
  name: string;
  teluguName: string;
  availability: string;
  image: string;
}

const MachineCard = ({ machine }: { machine: Machine }) => (
  <div className="bg-neutral-100 rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeInUp">
    <div className="relative h-48 bg-neutral-200">
      <Image
        src={machine.image}
        alt={machine.name || machine.teluguName}
        layout="fill"
        objectFit="cover"
        className="w-full h-full"
      />
      <div className="absolute top-2 right-2 px-3 py-1 bg-[#2C5F2D] text-white rounded-full text-sm">
        {machine.availability}
      </div>
    </div>
    <div className="p-6">
      <h4 className="text-xl font-bold text-[#2C5F2D] mb-2">{machine.name || "Machine"}</h4>
      <p className="text-lg text-[#333333] mb-4">{machine.teluguName}</p>
    </div>
  </div>
);

const MachinerySection = () => {
  // Static data for machine cards
  const defaultMachines = [
    {
      id: 1,
      name: "JCB (Backhoe Loader)",
      teluguName: "జేసీబీ (బ్యాక్‌హో లోడర్)",
      availability: "Available / అందుబాటులో ఉంది",
      image: "/14.jpeg",
    },
    {
      id: 2,
      name: "Tractor",
      teluguName: "ట్రాక్టర్",
      availability: "Available / అందుబాటులో ఉంది",
      image: "/13.jpeg",
    },
    {
      id: 3,
      name: "Water Tanker",
      teluguName: "నీటి ట్యాంకర్",
      availability: "Available / అందుబాటులో ఉంది",
      image: "/25.jpeg",
    },
    {
      id: 4,
      name: "Harvester",
      teluguName: "పంట కోత యంత్రం",
      availability: "Available / అందుబాటులో ఉంది",
      image: "/19.jpeg",
    },
    {
      id: 5,
      name: "Disc Harrow",
      teluguName: "డిస్క్ హారో",
      availability: "Available / అందుబాటులో ఉంది",
      image: "/16.jpeg",
    },
    {
      id: 6,
      name: "Harrow",
      teluguName: "హారో",
      availability: "Available / అందుబాటులో ఉంది",
      image: "/18.jpeg",
    },
  ];

  return (
    <section id="machinery" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2C5F2D] mb-3 animate__animated animate__fadeIn">
            Available Machines for Rent
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#97BC62] animate__animated animate__fadeIn">
            అద్దెకు అందుబాటులో ఉన్న యంత్రాలు
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Always visible machine cards */}
          {defaultMachines.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default MachinerySection;
