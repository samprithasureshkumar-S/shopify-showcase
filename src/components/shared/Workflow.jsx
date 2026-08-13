const steps = [
  'Reference Research',
  'UI Pattern Identification',
  'Component Extraction',
  'Data + Props',
  'Reusable React Components',
  'Single-Page Showcase',
  'Netlify Deployment',
]

function Workflow() {
  return (
    <div className="workflow__steps">
      {steps.map((step, index) => (
        <div key={step} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
          <span className="workflow__step">{step}</span>
          {index < steps.length - 1 && <span className="workflow__arrow">&rarr;</span>}
        </div>
      ))}
    </div>
  )
}

export default Workflow
