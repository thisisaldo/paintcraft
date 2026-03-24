const areaGroups = [
  {
    region: 'Inner Melbourne',
    suburbs: [
      'Melbourne CBD',
      'South Yarra',
      'Toorak',
      'Richmond',
      'Prahran',
      'Windsor',
      'St Kilda',
      'Fitzroy',
      'Carlton',
      'Collingwood',
      'Abbotsford',
      'Cremorne',
    ],
  },
  {
    region: 'Eastern Suburbs',
    suburbs: [
      'Hawthorn',
      'Camberwell',
      'Kew',
      'Armadale',
      'Malvern',
      'Glen Waverley',
      'Doncaster',
      'Box Hill',
      'Mitcham',
      'Ringwood',
      'Canterbury',
      'Balwyn',
    ],
  },
  {
    region: 'Northern Suburbs',
    suburbs: [
      'Brunswick',
      'Northcote',
      'Preston',
      'Heidelberg',
      'Eltham',
      'Diamond Creek',
      'Coburg',
      'Reservoir',
      'Thornbury',
      'Ivanhoe',
      'Bundoora',
    ],
  },
  {
    region: 'Southern Suburbs',
    suburbs: [
      'Brighton',
      'Bayside',
      'Sandringham',
      'Hampton',
      'Mentone',
      'Mordialloc',
      'Chelsea',
      'Frankston',
      'Mornington',
      'Mount Eliza',
    ],
  },
  {
    region: 'Western Suburbs',
    suburbs: [
      'Williamstown',
      'Newport',
      'Footscray',
      'Sunshine',
      'Essendon',
      'Moonee Ponds',
      'Flemington',
      'Ascot Vale',
      'Altona',
      'Werribee',
    ],
  },
]

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <p className="text-[11px] font-medium tracking-[0.12em] text-[#A8A29E] uppercase mb-3">
              Service areas
            </p>
            <h2
              className="text-4xl md:text-5xl text-[#111110] leading-tight tracking-tight"
              style={{ fontFamily: 'var(--font-instrument-serif)' }}
            >
              We paint across
              <br />
              <em>greater Melbourne</em>
            </h2>
          </div>
          <p className="text-[#78716C] text-sm max-w-[44ch] leading-relaxed">
            Based in Melbourne, we cover the full metropolitan area. Not sure if we reach your
            suburb? Call us — we travel up to 60km from the CBD.
          </p>
        </div>

        {/* Area columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {areaGroups.map((group) => (
            <div key={group.region}>
              <h3 className="text-[#111110] font-medium text-[11px] tracking-[0.1em] uppercase mb-4 pb-3 border-b border-[#E8E8E5]">
                {group.region}
              </h3>
              <ul className="flex flex-col gap-2">
                {group.suburbs.map((suburb) => (
                  <li key={suburb}>
                    <span className="text-[#78716C] text-xs leading-relaxed hover:text-[#111110] transition-colors duration-150 cursor-default">
                      {suburb}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="mt-14 p-8 md:p-10 rounded-2xl bg-[#FAFAF8] border border-[#E8E8E5] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-[#111110] font-medium text-sm mb-1">
              Don&apos;t see your suburb listed?
            </h3>
            <p className="text-[#78716C] text-sm">
              We regularly service outer Melbourne and regional areas. Get in touch and we&apos;ll confirm availability.
            </p>
          </div>
          <a
            href="tel:+61395472863"
            className="flex-shrink-0 flex items-center gap-2 bg-[#111110] text-white text-sm px-5 py-2.5 rounded-full hover:bg-[#2A2A29] active:scale-[0.98] transition-all duration-200"
          >
            Call (03) 9547 2863
          </a>
        </div>
      </div>
    </section>
  )
}
