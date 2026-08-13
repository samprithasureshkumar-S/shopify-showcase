const columns = [
  {
    title: 'ILIA Beauty',
    items: ['IliaHeader', 'IliaHero', 'IliaCategoryNav', 'IliaProductShowcase', 'IliaEditorialSplit', 'IliaTestimonial'],
  },
  {
    title: 'VAHDAM India',
    items: [
      'VahdamHeader',
      'VahdamHero',
      'VahdamCategoryNav',
      'VahdamCollectionSection',
      'VahdamStorySection',
      'VahdamTestimonial',
    ],
  },
  {
    title: 'Shared',
    items: [
      'PlaceholderImage',
      'SectionHeader',
      'Button',
      'Badge',
      'Rating',
      'ProductCard',
      'FeatureGrid',
      'Newsletter',
      'CategoryTile',
      'AnnouncementBar',
      'SiteFooter',
      'ComponentMap',
      'Workflow',
    ],
  },
]

function ComponentMap() {
  return (
    <div className="component-map__grid">
      {columns.map((column) => (
        <div className="component-map__card" key={column.title}>
          <h4>{column.title}</h4>
          <ul>
            {column.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ComponentMap
