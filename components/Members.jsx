import { useState, useCallback } from 'react'
import Image from 'next/image'

// 간단한 멤버 데이터
const membersData = [
  {
    id: 'demon',
    name: '정상수 (Sangsoo Jeong)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'SJ',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon2',
    name: '김민정 (Minjeong Kim)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'MK',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon3',
    name: '김상빈 (Sangbin Kim)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'SK',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon4',
    name: '김종민 (Jongmin Kim)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'JK',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon5',
    name: '김주원 (Joowon Kim)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'JK',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon6',
    name: '김준태 (Juntae Kim)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'JK',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon7',
    name: '박기태 (Kitae Park)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'KP',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon8',
    name: '윤석찬 (Seokchan Yoon)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'SY',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon9',
    name: '이도원 (Dowon Lee)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'DW',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon10',
    name: '이성권 (Sungkwon Lee)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'SK',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon11',
    name: '이세형 (Sahyung Lee)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'SH',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon12',
    name: '정동현 (Donghyeon Jeong)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'DJ',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/dhje0ng',
      email: 'dhje0ng@naver.com'
    }
  },
  {
    id: 'demon13',
    name: '채하늘 (Haneul Chae)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'HC',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
      email: 'no-reply@demonteam.com'
    }
  },
  {
    id: 'demon14',
    name: '최동민 (Dongmin Choi)',
    imageUrl: '/images/members/member1.jpg',
    fallbackText: 'HC',
    tags: ['Penetration Testing'],
    links: {
      github: 'https://github.com/demon',
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