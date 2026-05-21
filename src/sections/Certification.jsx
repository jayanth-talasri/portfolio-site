import awsCert from "../assets/certificates/AWS-certificate.pdf";
import deepLearningCert from "../assets/certificates/Deep Learning-certificate.pdf";
import dsaCert from "../assets/certificates/DSA-certificate.pdf";
function Certifications() {
  return (
    <section
      id="certifications"
      className="relative px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-4">
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500/50 transition">
            <h3 className="text-2xl font-bold mb-3">
              AWS Cloud Foundations
            </h3>

            <p className="text-gray-400">
              Cloud computing fundamentals, AWS services, and deployment concepts.
            </p>
            <a
  href={awsCert}
  target="_blank"
  rel="noreferrer"
  className="
    inline-block
    mt-6
    px-5
    py-2
    rounded-full
    bg-purple-600
    hover:bg-purple-500
    transition
    text-sm
    font-medium
  "
>
  View Certificate
</a>
          </div>

          {/* Card 2 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500/50 transition">
            <h3 className="text-2xl font-bold mb-3">
              NPTEL Deep Learning
            </h3>

            <p className="text-gray-400">
              Neural networks, CNNs, optimization, and deep learning techniques.
            </p>
            <a
  href={deepLearningCert}
  target="_blank"
  rel="noreferrer"
  className="
    inline-block
    mt-6
    px-5
    py-2
    rounded-full
    bg-purple-600
    hover:bg-purple-500
    transition
    text-sm
    font-medium
  "
>
  View Certificate
</a>
          </div>

          {/* Card 3 */}
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-purple-500/50 transition">
            <h3 className="text-2xl font-bold mb-3">
              DSA — GeeksforGeeks
            </h3>

            <p className="text-gray-400">
              Data structures, algorithms, and problem-solving fundamentals.
            </p>
            <a
  href={dsaCert}
  target="_blank"
  rel="noreferrer"
  className="
    inline-block
    mt-6
    px-5
    py-2
    rounded-full
    bg-purple-600
    hover:bg-purple-500
    transition
    text-sm
    font-medium
  "
>
  View Certificate
</a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Certifications;