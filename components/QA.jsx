import { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const qaData = [
  {
    question: 'Q. 데몬팀에 합류하고 싶어요! 어떻게 가입할 수 있나요?',
    answer: `
      데몬팀에서는 비 정기적으로 신규 팀원을 모집하고 있으며
      h4ckingc4mp@gmail.com 으로 본인의 프로필을 작성 후 보내주시면 됩니다.
      
      ❗ 단, 불법적인 행위를 하는 사람은 절대 데몬팀의 멤버가 될 수 없습니다.`
  },
  {
    question: 'Q. 데몬팀에서는 어떤 활동들을 하고 있나요?',
    answer: `
      데몬팀에서는 아래와 같은 활동들을 멤버들과 함께 하고 있습니다 😊

      1. 해킹 및 연구 프로젝트 진행
      2. 국내/외 해킹대회 참가
      3. 국제 해킹/보안 컨퍼런스 POC(Power of Community) 무료 참가 및 STAFF 활동
      4. 연 2회 해킹캠프 CTF 운영 (하계, 동계)`
  },
]

function FormattedAnswer({ answer }) {
  return <ReactMarkdown>{answer}</ReactMarkdown>
}

export default function QA() {
  const [activeItem, setActiveItem] = useState(null)

  const toggleQA = (index) => {
    setActiveItem(activeItem === index ? null : index)
  }

  return (
    <section className="section qa" id="qa">
      <div className="container">
        <h2 className="section-title">Q&A</h2>
        <div className="section-subtitle">cat /home/demon/questions.txt</div>
        
        <div className="qa-container">
          {qaData.map((item, index) => (
            <div 
              key={index}
              className={`qa-item ${activeItem === index ? 'active' : ''}`}
            >
              <div 
                className="qa-header" 
                onClick={() => toggleQA(index)}
              >
                <span className="qa-question">{item.question}</span>
                <span className="qa-icon">+</span>
              </div>
              <div className="qa-content">
                <div className="qa-content-inner">
                  <FormattedAnswer answer={item.answer} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}