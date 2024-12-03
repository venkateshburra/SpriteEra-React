import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import { MapEmbed } from "./MapEmbed";

export function Contact() {
  return (
    <section className="mt-28 mx-6 lg:mx-8">
      <h1 className="text-[25px] md:text-[30px] lg:text-[35px] md:font-semibold font-medium text-center">
        Get in Touch with AstraGrove School
      </h1>
      <p className="text-center text-[17px] md:text-[20px] lg:text-[25px] mx-2 md:mx-8 font-normal">
        We’re here to help! If you have questions about our programs,
        admissions, or any other inquiry, please don’t hesitate to reach out.
      </p>
      <div className="max-w-[1280px] xl:ml-4 2xl:ml-16 mx-auto">
        <div className="mt-6 max-w-[360px] md:max-w-none mx-auto">
          <div className="bg-[#002855] relative overflow-hidden max-w-[1175px] flex flex-col md:flex-row md:justify-between gap-2 rounded-lg text-white px-8 py-6 pb-16 md:px-14 md:py-12">
            <ContactInfo />
            <ContactForm />
            <div className="bg-[#ffb400] absolute -right-6 -top-10 md:-top-12 md:-right-8 size-[100px] md:size-[150px] lg:size-[200px] rounded-full"></div>
          </div>
          <MapEmbed />
        </div>
      </div>
    </section>
  );
}
