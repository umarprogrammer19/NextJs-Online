import React from 'react';

const Contact = () => {
  return (
    <div className="bg-blue-100 min-h-screen flex flex-col items-center justify-center max-w-full">
      <div id="Contact" className="w-full max-w-7xl px-5">
        <section className="text-gray-600 body-font relative">
          <div className="container mx-auto flex flex-wrap lg:flex-nowrap gap-8 py-16">
            {/* Map Section */}
            <div className="lg:w-2/3 w-full bg-gray-300 rounded-lg overflow-hidden relative shadow-md">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder={0}
                title="map"
                marginHeight={0}
                marginWidth={0}
                scrolling="no"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.185022901293!2d67.06591392284105!3d25.027794289544012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341676268af8d%3A0x73bd35b9c6f53339!2sSector%207C%20Sector%207%20B%20Surjani%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727598969120!5m2!1sen!2s"
                style={{ border: 0, filter: "contrast(1.2) opacity(0.6)" }}
              />
              <div className="relative bg-white flex flex-col lg:flex-row gap-6 py-6 px-8 rounded shadow-md z-10">
                <div>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm">
                    ADDRESS
                  </h2>
                  <p className="mt-1 text-sm">Surjani Town Karachi.</p>
                </div>
                <div>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm">
                    EMAIL
                  </h2>
                  <a className="text-blue-500 leading-relaxed text-sm">
                    asfaqasim144@gmail.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-sm mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed text-sm">123-456-7890</p>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <div className="lg:w-1/3 w-full bg-white flex flex-col rounded-lg shadow-lg p-6">
              <h2 className="title-font sm:text-4xl text-3xl font-medium text-gray-900 mb-4">
                Contact
              </h2>
              <p className="leading-relaxed text-gray-600 mb-6">
                Feel free to contact me via this form.
              </p>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-sm outline-none text-gray-700 py-2 px-3 leading-6 h-28 resize-none transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2 text-white bg-blue-500 font-semibold rounded-lg
                   hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;