import { useState } from 'react'

const timelineData = [
  {
    year: '2025',
    title: '올해의 데몬팀 활동 🎉',
    entries: [
      { date: '2025.05', desc: '2025 Pwn2own VirtualBox Exploit (Prison Break) | @fr0m1s9' },
      { date: '2025.02', desc: '제 30회 해킹캠프 동계 CTF 운영' }
    ]
  },
  {
    year: '2024',
    title: '2024 데몬팀 활동 👀',
    entries: [
      { date: '2024.10', desc: 'Automotive CTF 2024 3위 | @dhjeong' },
      { date: '2024.08', desc: '제 29회 해킹캠프 하계 CTF 운영' },
      { date: '2024.02', desc: '제 28회 해킹캠프 동계 CTF 운영' }
    ]
  },
  {
    year: '2023',
    title: '2023 데몬팀 활동 😊',
    entries: [
      { date: '2023.09', desc: 'Automotive CTF 2023 9위 | @dhjeong' },
      { date: '2023.08', desc: '제 27회 해킹캠프 하계 CTF 운영' },
      { date: '2023.02', desc: '제 26회 해킹캠프 하계 CTF 운영' },
    ]
  },
  {
    year: '2022',
    title: '2022 데몬팀 활동 😊',
    entries: [
      { date: '2022.11', desc: 'Power of XX 여성해킹대회 CTF 운영' },
      { date: '2022.09', desc: '22년 CDDC 교육/강의 및 CTF 운영 (싱가포르 정부 주관)' },
      { date: '2022.07', desc: '22년 충복 해킹캠프 교육/강의 및 CTF 운영' },
      { date: '2022.08', desc: '제 25회 해킹캠프 하계 CTF 운영' },
      { date: '2022.02', desc: '제 24회 해킹캠프 하계 CTF 운영' },
    ]
  },
  {
    year: '2021',
    title: '2021 데몬팀 활동 😊',
    entries: [
      { date: '2021.11', desc: 'Power of XX 여성해킹대회 CTF 운영' },
      { date: '2021.08', desc: 'WORMCON 0x01 CTF 8위' },
      { date: '2021.08', desc: '제 23회 해킹캠프 하계 CTF 운영' },
      { date: '2021.02', desc: '제 22회 해킹캠프 하계 CTF 운영' },
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