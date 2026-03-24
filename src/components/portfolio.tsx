import Image from 'next/image'

const projects = [
  {
    seed: 'melb-painting-terrace',
    title: 'South Yarra Terrace',
    description: 'Full interior repaint — 4-bedroom Victorian terrace',
    tag: 'Residential',
    aspect: 'aspect-[16/9]',
    span: 'lg:col-span-2',
  },
  {
    seed: 'melb-painting-office',
    title: 'CBD Office Fitout',
    description: '12-level commercial repaint, completed overnight',
    tag: 'Commercial',
    aspect: 'aspect-square',
    span: '',
  },
  {
    seed: 'melb-painting-exterior',
    title: 'Brighton Exterior',
    description: 'Full facade restoration with premium acrylic render',
    tag: 'Exterior',
    aspect: 'aspect-square',
    span: '',
  },
  {
    seed: 'melb-painting-apartment',
    title: 'Fitzroy Apartment Complex',
    description: 'Common areas and 24 apartment interiors',
    tag: 'Strata',
    aspect: 'aspect-square',
    span: '',
  },
  {
    seed: 'melb-painting-heritage',
    title: 'Toorak Heritage Home',
    description: 'Period home restoration with heritage colour palette',
    tag: 'Heritage',
    aspect: 'aspect-[4/3]',
    span: 'lg:col-span-2',
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 bg-[#FAFAF8]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-3">
              Our work
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#111110] leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              Projects across
              <br />
              <em>greater Melbourne</em>
            </h2>
          </div>
          <p className="text-[#78716C] text-sm max-w-[40ch] leading-relaxed">
            A selection of recent residential and commercial painting projects from across Melbourne.
          </p>
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((project) => (
            <div
              key={project.seed}
              className={`relative overflow-hidden rounded-2xl group ${project.aspect} ${project.span}`}
            >
              <Image
                src={`https://picsum.photos/seed/${project.seed}/800/600`}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111110]/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Info on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white/65 text-xs mb-0.5">{project.description}</p>
                <h3 className="text-white font-medium text-sm">{project.title}</h3>
              </div>
              {/* Tag pill always visible */}
              <div className="absolute top-3 left-3">
                <span className="bg-white/90 backdrop-blur-sm text-[#111110] text-[11px] font-medium px-2.5 py-1 rounded-full">
                  {project.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
