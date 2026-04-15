import Navbar from "@/components/layout/Navbar";

export default function Schedule() {
  return (
    <div className="flex flex-col font-sans">
      <Navbar />
      <div className="bg-primary h-screen flex items-center justify-center">
        <h1 className="text-gray-800 text-2xl">schedule</h1>
      </div>
    </div>
  );
}
