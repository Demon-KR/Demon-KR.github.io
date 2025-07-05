import { useState, useCallback } from 'react'
import Image from 'next/image'

const membersData = [
  {
    id: 'demon',
    name: '정상수 (Sangsoo Jeong)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'SJ',
    tags: ['Security Researcher'],
    links: {
      github: 'https://github.com/demon-kr',
      website: 'https://1993-constant.tistory.com',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon2',
    name: '김민정 (Minjeong Kim)',
    imageUrl: '/images/members/rls1004.png',
    fallbackText: 'MK',
    tags: ['Security Researcher'],
    links: {
      github: 'https://github.com/rls1004',
      website: 'https://rls1004.github.io',
      email: '98nba@naver.com'
    }
  },
  {
    id: 'demon3',
    name: '김상빈 (Sangbin Kim)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'SK',
    tags: ['Vulnerability Researcher', 'Virtualization'],
    links: {
      github: 'https://github.com/fr0m1s9',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon4',
    name: '김종민 (Jongmin Kim)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'JK',
    tags: ['Security Researcher', 'CTF Player', '@Super-Guesser', '@CyKor'],
    links: {
      github: 'https://github.com/demon-kr',
      website: 'https://slyfizz.notion.site/slyfizz-s-rev-for-fun-01a89e24864744b486e16521b53949d9',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon5',
    name: '김주원 (Joowon Kim)',
    imageUrl: '/images/members/arrester.png',
    fallbackText: 'JK',
    tags: ['Security Researcher', 'CTF Player', '@ENKI'],
    links: {
      github: 'https://github.com/arrester',
      website: 'https://blog.naver.com/lstarrlodyl',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon6',
    name: '김준태 (Juntae Kim)',
    imageUrl: '/images/members/hellojuntae.jpg',
    fallbackText: 'JK',
    tags: ['Security Researcher'],
    links: {
      github: 'https://github.com/demon-kr',
      website: 'https://sunrinjuntae.tistory.com',
      email: 'hellojuntae@kaist.ac.kr'
    }
  },
  {
    id: 'demon7',
    name: '박기태 (Kitae Park)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'KP',
    tags: ['Security Researcher'],
    links: {
      github: 'https://github.com/demon-kr',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon8',
    name: '손현지 (Hyunji Son)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'HS',
    tags: ['Security Researcher'],
    links: {
      github: 'https://github.com/demon-kr',
      website: 'https://jiravvit.github.io',
      email: 'hjson012@gmail.com'
    }
  },
  {
    id: 'demon9',
    name: '윤석찬 (Seokchan Yoon)',
    imageUrl: '/images/members/ch4n3.jpg',
    fallbackText: 'SY',
    tags: ['Security Researcher', 'CTF Player'],
    links: {
      github: 'https://github.com/ch4n3-yoon',
      email: 'ch4n3.yoon@gmail.com'
    }
  },
  {
    id: 'demon10',
    name: '이도원 (Dowon Lee)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'DL',
    tags: ['Security Researcher', '@ROKA'],
    links: {
      github: 'https://github.com/demon-kr',
      website: 'https://blog.naver.com/ksil_',
      email: 'ldw0811@gmail.com'
    }
  },
  {
    id: 'demon11',
    name: '이성권 (Sungkwon Lee)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'SL',
    tags: ['Security Researcher'],
    links: {
      github: 'https://github.com/demon-kr',
      website: 'https://reckon4.com',
      email: 'sooips147@gmail.com'
    }
  },
  {
    id: 'demon12',
    name: '이세형 (Sahyung Lee)',
    imageUrl: '/images/members/hackintoanetwork.jpg',
    fallbackText: 'SL',
    tags: ['Security Researcher'],
    links: {
      github: 'https://github.com/hackintoanetwork',
      email: 'hackintoanetwork@proton.me'
    }
  },
  {
    id: 'demon13',
    name: '정동현 (Donghyeon Jeong)',
    imageUrl: '/images/members/dhjeong.png',
    fallbackText: 'DJ',
    tags: ['Security Researcher', 'Automotive'],
    links: {
      github: 'https://github.com/dhje0ng',
      website: 'https://dhjeong.kr',
      email: 'dhjeongkr@gmail.com'
    }
  },
  {
    id: 'demon14',
    name: '채하늘 (Haneul Chae)',
    imageUrl: '/images/members/g0riya.jpg',
    fallbackText: 'HC',
    tags: ['Security Researcher', 'CTF Player', '@Super-Guesser'],
    links: {
      github: 'https://github.com/G0RiyA',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon15',
    name: '최동민 (Dongmin Choi)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'DC',
    tags: ['Security Researcher'],
    links: {
      github: 'https://github.com/demon-kr',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon16',
    name: '황수민 (Sumin Hwang)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'SH',
    tags: ['Security Researcher'],
    links: {
      github: 'https://github.com/demon-kr',
      website: 'https://katolik-xixon.tistory.com',
      email: 'no-reply@demonteam.com'
    }
  },
]

export default function Members() {
  const [imageErrors, setImageErrors] = useState({})
  const handleImageError = useCallback((id) => {
    console.log(`Member image error for: ${id}`)
    setImageErrors(prev => ({ ...prev, [id]: true }))
  }, [])

  const getLinkIcon = (type) => {
    switch (type) {
      case 'github':
        return '🔗'
      case 'linkedin':
        return '💼'
      case 'email':
        return '📧'
      case 'website':
        return '🌐'
      default:
        return '🔗'
    }
  }

  const handleLinkClick = (url, type) => {
    if (type === 'email') {
      window.location.href = `mailto:${url}`
    } else {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className="section members" id="members">
      <div className="container">
        <h2 className="section-title">Members</h2>
        <div className="section-subtitle">cat /etc/passwd | grep team</div>
        
        <div className="members-container">
          <div className="members-grid">
            {membersData.map((member) => (
              <div key={member.id} className="member-card">
                {/* Member Avatar */}
                <div className="member-avatar">
                  {imageErrors[member.id] ? (
                    <div className="member-avatar-fallback">
                      {member.fallbackText}
                    </div>
                  ) : (
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      width={50}
                      height={50}
                      className="member-avatar-image"
                      onError={() => handleImageError(member.id)}
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                    />
                  )}
                </div>

                {/* Member info */}
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  
                  {/* Member tags */}
                  <div className="member-tags">
                    {member.tags.map((tag, index) => (
                      <span key={index} className="member-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div className="member-links">
                  {Object.entries(member.links).map(([type, url]) => (
                    <button
                      key={type}
                      className="member-link"
                      onClick={() => handleLinkClick(url, type)}
                      aria-label={`${member.name}의 ${type} 링크`}
                      title={type === 'email' ? `이메일: ${url}` : `${type}: ${url}`}
                    >
                      {getLinkIcon(type)}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}