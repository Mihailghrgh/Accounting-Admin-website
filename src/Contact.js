export default function Contact() {
  return (
    <section id="contact" className="email-inquiry">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#800020] mb-12">
          Contact Us
        </h2>
        <form className="inquiry-form">
          <div className="form-group">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Nume:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nume si Prenume"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020]"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020]"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Bloc:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Bloc si Scara"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020]"
            />
          </div>
          <div className="form-group">
            <label
              htmlFor="question"
              className="block text-gray-700 font-semibold mb-2"
            >
              Întrebare:
            </label>
            <textarea
              id="question"
              name="question"
              required
              placeholder="Scrie aici Întrebarea ta"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020] h-32"
            ></textarea>
          </div>
          <button type="submit" className="btn w-full">
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
