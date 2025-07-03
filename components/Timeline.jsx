import { useState } from 'react'

const timelineData = [
  {
    year: '2025',
    title: '-',
    entries: [
      { date: '2025.08', desc: '제 31회 해킹캠프 하계 CTF 운영' },
      { date: '2025.02', desc: '제 30회 해킹캠프 동계 CTF 운영' }
    ]
  },
  {
    year: '2023',
    title: '-',
    entries: [
      { date: '2023.01', desc: 'undefined' },
    ]
  }
]

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(null)

  const toggleTimeline = (index) => {
    setActiveItem(activeItem === index ? null : index)
  }

  return (
    <section className="section timeline" id="timeline">
      <div className="container">
        <h2 className="section-title">Activity Timeline</h2>
        <div className="section-subtitle">cat /var/log/demon/activities.log</div>
        
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div 
              key={index} 
              className={`timeline-item ${activeItem === index ? 'active' : ''}`}
            >
              <div 
                className="timeline-header" 
                onClick={() => toggleTimeline(index)}
              >
                <span className="timeline-year">{item.year}</span>
                <span className="timeline-title">{item.title}</span>
                <span className="timeline-icon">+</span>
              </div>
              <div className="timeline-content">
                {item.entries.map((entry, entryIndex) => (
                  <div key={entryIndex} className="timeline-entry">
                    <span className="timeline-date">{entry.date}</span>
                    <span className="timeline-desc">{entry.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}