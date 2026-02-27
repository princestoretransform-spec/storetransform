import ServicesSection from "./components/ServicesSection";


export default function AboutPage() {
  return (

    <>

      {/* Banner / Hero */}
      <section className="relative min-h-[70vh] text-white" style={{ backgroundImage: 'url("https://storetransform  .com/wp-content/uploads/2022/06/abouts.jpg")', backgroundSize: "cover", backgroundPosition: "center", height: "20pc" }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 text-center md:py-32">
          <h1 className="mt-3 text-4xl font-extrabold leading-tight drop-shadow md:text-6xl">
            About Us
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-base text-gray-200 md:mt-4 md:text-lg">
            At Store Transform , we’re dedicated to helping clients solve their toughest web design & development challenges and realize their greatest ambitions – from start-ups to Fortune 500 companies – and the work we do with them is as varied as they are.
          </p>


        </div>
      </section>

      <ServicesSection />

    </>
  );


}

