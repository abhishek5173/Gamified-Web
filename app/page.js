import Image from "next/image";

export default function Home() {
  return (
    <div style={{
      backgroundImage: `radial-gradient(circle,_blue,_transparent)`,
  
    }} className="h-screen w-full bg-neutral-900 flex items-center justify-center">
    
        <h1 className="text-4xl font-bold mb-4 text-center">
          Welcome to the Next.js Starter Template!
        </h1>
      
    </div>
  );
}
