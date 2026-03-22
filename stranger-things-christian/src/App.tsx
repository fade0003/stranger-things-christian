import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ContentSection from './components/ContentSection';
import SubscriptionForm from './components/SubscriptionForm';
import InteractiveBackground from './components/InteractiveBackground';

interface LinkItem {
  id: number;
  title: string;
  url: string;
  description: string;
}

interface VideoItem {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

interface ContentData {
  links: LinkItem[];
  videos: VideoItem[];
  blogPosts: BlogPost[];
}

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background: #0a0a0a;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  position: relative;
  z-index: 10;
`;

const App: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [content, setContent] = useState<ContentData>({
    links: [],
    videos: [],
    blogPosts: []
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Sample content - in real app this would come from API
  useEffect(() => {
    setContent({
      links: [
        { id: 1, title: 'Bible Gateway', url: 'https://www.biblegateway.com', description: 'Online Bible study tools' },
        { id: 2, title: 'Got Questions', url: 'https://www.gotquestions.org', description: 'Christian Q&A resource' }
      ],
      videos: [
        { id: 1, title: 'Finding Faith', url: 'https://example.com/video1', thumbnail: '/api/placeholder/300/200' },
        { id: 2, title: 'Understanding Prayer', url: 'https://example.com/video2', thumbnail: '/api/placeholder/300/200' }
      ],
      blogPosts: [
        { id: 1, title: 'A Journey to Faith', excerpt: 'My personal story of finding God...', date: '2024-01-15' },
        { id: 2, title: 'Prayer for Beginners', excerpt: 'How to start talking with God...', date: '2024-01-10' }
      ]
    });
  }, []);

  return (
    <AppContainer>
      <InteractiveBackground mousePosition={mousePosition} />
      <div className="crt-effect" />
      
      <MainContent>
        <Navigation />
        <Hero mousePosition={mousePosition} />
        
        <ContentSection 
          title="Resources & Links"
          content={content.links}
          type="links"
        />
        
        <ContentSection 
          title="Video Content"
          content={content.videos}
          type="videos"
        />
        
        <ContentSection 
          title="Blog Posts"
          content={content.blogPosts}
          type="blog"
        />
        
        <SubscriptionForm />
      </MainContent>
    </AppContainer>
  );
};

export default App;
