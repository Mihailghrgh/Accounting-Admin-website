import MapSection from "./MapSection";

export default function Contact() {
  return (
    <section id="contact" className="email-inquiry py-12">
      <div className="other-container">
        <h2 className="text-3xl font-bold text-center text-[#800020] mb-12">
          Intreabă-ne. Suntem aici sa te ajutăm!
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/2">
            <form
              className="inquiry-form max-w-none"
              action="https://formspree.io/f/mkggpjnv"
              method="POST"
            >
              <div className="form-group">
                <label htmlFor="name" className="block mb-2 text-gray-700">
                  Nume:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nume si Prenume"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="block mb-2 text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="bloc" className="block mb-2 text-gray-700">
                  Bloc:
                </label>
                <input
                  type="text"
                  id="bloc"
                  name="bloc"
                  placeholder="Bloc si Scara"
                  className="w-full p-2 border border-gray-300 rounded"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="sector" className="block mb-2 text-gray-700">
                  Alege Sectorul:
                </label>
                <select
                  id="sector"
                  name="Sector"
                  className="custom-select w-full"
                >
                  <option>Sector 1</option>
                  <option>Sector 2</option>
                  <option>Sector 3</option>
                  <option>Sector 4</option>
                  <option>Sector 5</option>
                  <option>Sector 6</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="question" className="block mb-2 text-gray-700">
                  Întrebare:
                </label>
                <textarea
                  id="question"
                  name="question"
                  required
                  placeholder="Scrie aici Întrebarea ta"
                  className="w-full p-2 border border-gray-300 rounded h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn bg-[#a00000] text-white hover:bg-[#800020]"
              >
                Trimite e-mail
              </button>
            </form>
          </div>
          <h2 className="text-2xl font-semibold mb-6 text-[#800020]">
            Cum ne găsești ?
          </h2>
          <MapSection />
        </div>
      </div>
    </section>
  );
}
