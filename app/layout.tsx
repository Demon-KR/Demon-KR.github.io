import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
 title:'DEMON — 보안 연구팀',
 description:'화이트 해커로 구성된 DEMON 팀입니다.'
};
const initializeTheme=`(function(){try{var t=localStorage.getItem('demon-theme')||'system';document.documentElement.dataset.theme=t==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):t}catch{}})()`;
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko" suppressHydrationWarning><body><script dangerouslySetInnerHTML={{__html:initializeTheme}}/>{children}</body></html>}
