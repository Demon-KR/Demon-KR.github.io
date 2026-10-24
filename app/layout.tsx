import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title:'DEMON — Cybersecurity Research Team',
 description:'화이트 해커로 이루어진 보안 연구팀 DEMON. 팀 소개, 연구와 활동 기록, 팀원, 갤러리 및 가입 안내.',
};
const initializeTheme=`(function(){try{var t=localStorage.getItem('demon-theme')||'system';document.documentElement.dataset.theme=t==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t;var l=localStorage.getItem('demon-lang');if(l==='en')document.documentElement.lang='en'}catch(e){}})()`;
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{__html:initializeTheme}}/>{children}</body></html>}
